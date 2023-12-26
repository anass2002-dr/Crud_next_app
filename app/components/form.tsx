"use client";
import React from "react";
import { json } from "stream/consumers";
export default function Form_html(){
  async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    
    e.preventDefault();
    const target=e.currentTarget;
    const first_name=target.elements.namedItem('first_name') as HTMLInputElement;
    const last_name=target.elements.namedItem('last_name') as HTMLInputElement;
    const age=target.elements.namedItem('age') as HTMLInputElement;

    const data={
      first_name:first_name.value,
      last_name:last_name.value,
      age:age.value
    }
    console.log(data)
    try{
      const resp=await fetch('../api/user',{
        method:"POST",
        body:JSON.stringify(data),
        
      })
      if(!resp.ok){
        throw new Error("HTTP error! status: " + resp.status);
      }
      console.log(resp.json)
    }
    catch(error){
      console.log("data is still on front end");
    }
  }
    return(
      <>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6" >

    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="first_name" id="grid-first-name" type="text" placeholder="First Name"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">

<div className="w-full md:w-1/2 px-3">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
    Last Name
  </label>
  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="last_name" id="grid-last-name" type="text" placeholder="Last Name"/>
</div>
</div>

<div className="flex flex-wrap -mx-3 mb-6">

<div className="w-full md:w-1/2 px-3">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-age">
    Age
  </label>
  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="age" id="grid-age" type="text" placeholder="Age"/>
</div>
</div>
  <div className="w-full md:w-1/3 px-3 mt-6 md:mb-0">
      <input type="submit" value="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
  </div>
 
    
 
</form>
</>
    )
}