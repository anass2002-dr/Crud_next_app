import User from "@/app/Model/user";
import connectDB from "@/app/lib/connectDB";
import { NextResponse } from "next/server";


export async function PUT(request,{params}){
    const {id}=params;
    const {newFirst_name:first_name,newLast_name:last_name,newAge:age}=await request.json();
    await connectDB();
    await User.findByIdAndUpdate(id,{first_name,last_name,age})
    return NextResponse.json({message:"update with success"},{status:200});
    
}
export async function GET(request,{params}){
    const{id}=params;
    await connectDB();
    const user=await User.findOne({_id:id});
    return NextResponse.json({user},{status:200});
}