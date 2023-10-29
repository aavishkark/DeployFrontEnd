import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
export const UpdateNote = () => {
    const { id } = useParams();
    const [title,settitle]=useState("")
    const [body,setbody]=useState("")
    const handleupdate=()=>{
        let data={}
        if(title !== "" && body !== ""){
             data={
                title:title,
                body:body
            }
        }
        else if(title === "" && body !== ""){
            data={
                body:body
            }
        }
        else if(title !== "" && body === ""){
            data={
                title:title
            }
        }
    
       fetch(`https://clean-slippers-goat.cyclic.app/notes/update/${id}`,{
        method:"PATCH",
            headers:{
              'Content-Type': 'application/json',
              "token":`Bearer ${localStorage.getItem('token')}`
            },
            body:JSON.stringify(data)
       })
    }
  return (
    <div>
        <input type='text' placeholder='update title' onChange={(e)=>{settitle(e.target.value)}}/>
        <input type='text' placeholder='update body' onChange={(e)=>{setbody(e.target.value)}}/>
        <button onClick={()=>{handleupdate()}}>Update</button>
    </div>
  )
}
