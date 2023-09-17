import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cron from "node-cron";
import RoomCode from "./models/room.model.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use("/api", authRoutes);

const generateRoomCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 4; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
};

cron.schedule("* * * * *", async () => {
    const newCode = generateRoomCode();
    console.log(`Generated new room code: ${newCode}`);
    try {
        // Update the current room code in the RoomCode collection
        let roomCodeEntry = await RoomCode.findOne();
        if (roomCodeEntry) {
            roomCodeEntry.code = newCode;
            roomCodeEntry.updatedAt = Date.now();
            await roomCodeEntry.save();
        } else {
            await RoomCode.create({ code: newCode });
        }

    } catch (error) {
        console.error("Error updating room codes:", error);
    }
});

export default app

