"use client";
import EditUser from "@/app/components/editUser";
import { error } from "console";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { json } from "stream/consumers";
async function getUser(id:any) {
    try{
        const res=await fetch(`http://localhost:3000/api/user/${id}`,{
            cache:"no-store",
        });
        if(!res.ok){
            throw new Error("error de loading user");
        }
        return res.json();
    }
    catch(error){
        console.log(error)
    }
}
export default async function UpdateUser({params}:any){
  const {id}=params;
  const {user}=await getUser(id)
  console.log(user)
  return(
    <div>hello</div>
    // <EditUser/>
  )  
}