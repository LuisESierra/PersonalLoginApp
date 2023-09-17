import user from "../models/user.model.js"
import room from "../models/room.model.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const roomCodeEntry = await room.findOne();
        const roomCode = roomCodeEntry ? roomCodeEntry.code : "INIT";  // Default to "INIT" if no room code exists yet
        
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
