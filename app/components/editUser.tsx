"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { json } from "stream/consumers";

export default function EditUser({params}:any){
    const [first_name,setfirst_name]=useState<string>("")
    const [last_name,setlast_name]=useState<string>("")
    const [age,setage]=useState<number>()
    const router=useRouter()
    async function handelsubmition(e:any) {
        e.preventDefault();
        if(!first_name || !last_name || !age){
            alert("pleas set all input ");
            return;
        }
        try{
            const res=await fetch("http://localhost:3000/api/user",{
            method:"POST",
            headers:{"content-type":"application/json",},
            body:JSON.stringify({first_name,last_name,age})
            })
            if(res.ok){
                router.push('/')
            }
            else{
                throw Error("this error in sending data");
            }
        }
        catch(error){
            console.log(error)
        }
    }
    return(
       
    <> 
    <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto p-4">
            <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Personal Information</h1>
                <form onSubmit={handelsubmition}>
                    <div className="mb-4">
                        <input type="text" placeholder="First Name" onChange={(e)=>setfirst_name(e.target.value)} value={first_name} className="border p-2 rounded w-full"/>
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="Last Name" onChange={(e)=>setlast_name(e.target.value)} value={last_name} className="border p-2 rounded w-full"/>
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="Age" onChange={(e)=>setage(parseInt(e.target.value))} value={age}className="border p-2 rounded w-full"/>
                    </div>
                    
                    <button type="submit" id="theme-toggle" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                        Add User
                    </button>
                </form>
            </div>
        </div>

    </div>
    </>
      
    )
}