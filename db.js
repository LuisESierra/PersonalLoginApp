import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:1234@clustertest.hjcmov7.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB is connected");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
    }
};
