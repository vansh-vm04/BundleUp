import mongoose from "mongoose"

const mongoUrl = process.env.MONGO_URL

export const dbConnect = async ()=>{
    await mongoose.connect(mongoUrl!)
}

