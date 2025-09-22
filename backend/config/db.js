import mongoose from "mongoose";


export const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connnect: ${conn.connection.host}`);

    } catch (error) { 
        console.error(`Error: ${error.message} <-- That is the error`);
        process.exit(1);

    }
}



