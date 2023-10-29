import React, { useState } from 'react'

export const CreateNote= () => {
    let [username,setusername]=useState("")
    const [title,settitle]=useState("")
    const [body,setbody]=useState("")
    const [userID,setuserid]=useState("")
    const handlecreate=()=>{
        const data={
            title,
            body,
            userID,
            username
        }
        fetch("https://clean-slippers-goat.cyclic.app/notes/create",{
          method:"POST",
          headers:{
            'Content-Type': 'application/json',
            "token":`Bearer ${localStorage.getItem('token')}`
          },
          body:JSON.stringify(data)
        }).then((res)=>{
          return res.json()
        })
        .then((data)=>{
          console.log(data)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  return (
    <div>
        <h3>Create Note</h3>
        <input type='text' placeholder='Enter title' value={title} onChange={(e)=>{settitle(e.target.value)}}/>
        <textarea placeholder='"Enter note' value={body} onChange={(e)=>{setbody(e.target.value)}}></textarea>
        <button onClick={handlecreate}>Create</button>
    </div>
  )
}
