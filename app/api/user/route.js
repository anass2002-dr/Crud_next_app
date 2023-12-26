import User from "@/app/Model/user";
import connectDB from "@/app/lib/connectDB";
import { NextResponse } from "next/server";
export async function POST(request){
    const{first_name,last_name,age}=await request.json();
    await connectDB();
    await User.create({first_name,last_name,age});
    return NextResponse.json({message:"user created"},{status:201});

}
export async function GET(){
    await connectDB();
    const users=await User.find();
    return NextResponse.json({users})
}
export async function DELETE(request){
    const id=request.nextUrl.searchParams.get("id");
    await connectDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({message:"user deleted with success"});

}