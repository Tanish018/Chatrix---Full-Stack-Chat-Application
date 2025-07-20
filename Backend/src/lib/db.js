import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected Sucessfully : ${con.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}