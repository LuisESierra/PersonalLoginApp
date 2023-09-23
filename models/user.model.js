import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    identification: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },    
    tipoUsuario: {
        type: String,
        required: true,
        trim: true
    },
    rol: {
        type: String,
        required: true,
        trim: true
    },
    roomCode: {
        type: String,
        required: true,
        trim: true
    },
    finalizadaTarea: {
        type: Boolean,
        required: true,
        trim: true 
    }

})
export default mongoose.model('User', userSchema)