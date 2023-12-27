"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function RemoveBtn({id_user}:any){
    const router=useRouter()
    const RemoveUser=async ()=>{
        const confirmed =confirm('are you sure want to delete this user');
        if(confirmed){
            const res=await fetch(`http://localhost:3000/api/user?id=${id_user}`,{
                method:"DELETE",
            })
            if(res.ok){
                router.refresh()
            }
            else{
                throw Error("error in deleting");
            }
    }
    }
    return(
        <button type="button" onClick={RemoveUser} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
    )
}