"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


async function loadUser() {
    try{
        const res=await fetch("http://localhost:3000/api/user",{
            cache:"no-store",
        });
        if(!res.ok){
            throw new Error("failed to fetch users");
        }
        return res.json();
    }
    catch(error){
        console.log("error loading users list ",error)
    }

    
}

export default async function UserList(){
    const {users}=await loadUser()
    users.map((u:any)=>{console.log(u.first_name)})
    // const router=useRouter()
    const Delete=async (params:string)=> {
        const confirmed =confirm('are you sure want to delete this user');
        if(confirmed){
            await fetch(`http://localhost:3000/api/user?id=${params}`,{
                method:"DELETE",
            })
            // if(res.ok){
            //     router.refresh()
            // }
            // else{
            //     throw Error("error in deleting");
            // }
        }
    }
    return(
        <>
    <div className="flex min-h-screen items-center justify-center">
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-xl">
      <thead>
        <tr className="bg-blue-gray-100 text-gray-700">
          <th className="py-3 px-4 text-left">First Name</th>
          <th className="py-3 px-4 text-left">Last Name</th>
          <th className="py-3 px-4 text-left">Age</th>
          <th className="py-3 px-4 text-left" colSpan={2}></th>
        </tr>
      </thead>
      <tbody className="text-blue-gray-900">
      {users.map((u)=>( 
        <tr className="border-b border-blue-gray-200">
          <td className="py-3 px-4">{u.first_name}</td>
          <td className="py-3 px-4">{u.last_name}</td>
          <td className="py-3 px-4">{u.age}</td>
          
          <td className="py-3 px-4">
            <Link href={`../userUpdate/${u._id}`} className="font-medium text-blue-600 hover:text-blue-800">Edit</Link>
          </td>
          <td className="py-3 px-4">
          <button type="button" onClick={()=>Delete(u._id)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>

          </td>
        </tr>
        ))}
        <tr className="border-b border-blue-gray-200">
          <td className="py-3 px-4 font-medium">Total user </td>
          <td className="py-3 px-4"></td>
          <td className="py-3 px-4 font-medium">3</td>
          <td className="py-3 px-4"></td>
        </tr>
      </tbody>
    </table>
    
  </div>
</div>

     
        
        </>
    )
}