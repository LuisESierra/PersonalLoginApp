// roomCode.model.js
import mongoose from "mongoose";

const roomCodeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('RoomCode', roomCodeSchema);
