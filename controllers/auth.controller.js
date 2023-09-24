import user from "../models/user.model.js"
import room from "../models/room.model.js";

export const register = async (req, res) => {
    const { name, identification, email, tipoUsuario, rol, finalizadaTarea } = req.body;
    try {
        const roomCodeEntry = await room.findOne();
        const roomCode = roomCodeEntry ? roomCodeEntry.code : "INIT"; 
        
        const newUser = new user({
            name,
            identification,
            email,
            tipoUsuario,
            roomCode,
            rol,
            finalizadaTarea
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

export const selectRole = async (req, res) => {
    const { userId, selectedRole } = req.body; // userId identifies which user to update, selectedRole is their chosen role

    try {
        const userToUpdate = await user.findById(userId);

        if (!userToUpdate) {
            return res.status(404).send('User not found.');
        }

        userToUpdate.rol = selectedRole;
        const updatedUser = await userToUpdate.save();
        
        res.json(updatedUser);
    } catch (error) {
        console.error("Error updating user role:", error);
        res.status(500).send('Internal server error.');
    }
};

export const getUsersInRoom = async (req, res) => {
    try {
      const { roomCode } = req.params;
      const count = await user.countDocuments({ roomCode });
      res.json({ userCount: count });
    } catch (error) {
      console.error('Error fetching users count:', error);
      res.status(500).send('Internal Server Error');
    }
  };