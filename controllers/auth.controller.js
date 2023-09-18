import user from "../models/user.model.js"
import room from "../models/room.model.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const roomCodeEntry = await room.findOne();
        const roomCode = roomCodeEntry ? roomCodeEntry.code : "INIT"; 
        
        const newUser = new user({
            username,
            email,
            password,
            roomCode
        });
        
        const userSaved = await newUser.save();
        res.json(userSaved);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

export const roomCode = async (req, res) => { 
    try {
        const currentRoomCode = await room.findOne({});
        if (currentRoomCode) {
            res.json({ roomCode: currentRoomCode.code });
        } else {
            res.status(404).send("Room code not found.");
        }
    } catch (error) {
        console.error("Error fetching room code:", error);
        res.status(500).send("Internal server error.");
    }
};
