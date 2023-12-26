import mongoose from "mongoose";

async function connectDB() {
    try{
      await mongoose.connect(process.env.DATABASE_URL);
      console.log("connected with success");
    }
    catch(error){
      console.log(error)
    }
}

export default connectDB;