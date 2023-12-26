import { NextRequest, NextResponse } from "next/server";
import user from "../../Model/user";
import connectDB from "../../lib/connectDB"
import { error } from "console";
import mongoose from "mongoose";

export default async function handler(req:NextRequest, res:NextResponse) {
    const DATABASE_URL = process.env.DATABASE_URL as string;

    let client;
    try{
        client=await mongoose.connect(DATABASE_URL)
        console.log("db connected")
    }
    catch(error){
        console.error(error)
    }
    const data=req.json()
    const{first_name,last_name,age}:any=data
    const newData={
        ...data,
        date:new Date()
    }
    try{
        await user.create(newData)
        console.log("mebrok")
        NextResponse.json({messege:"inserted with success"},{status:201})
    }
    catch(error){
        console.log(error)
        NextResponse.json({
            message:"error sending data"
        },{status:500})
    }
  }