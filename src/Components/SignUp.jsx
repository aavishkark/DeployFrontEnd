import React, { useState } from 'react'

export const SignUp = () => {
    let [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [pass,setpassword]=useState("")
    const handleregister=()=>{
        const data={
            username,
            email,
            pass
        }
        fetch("https://clean-slippers-goat.cyclic.app/users/register",{
          method:"POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
        }).then((res)=>{
          res.json()
        })
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  return (
    <div>
        <h3>Sign Up</h3>
        <input type='text' placeholder='Enter username..' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        <input type='email' placeholder='"Enter email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        <input type='password' placeholder='Enter password' value={pass} onChange={(e)=>{setpassword(e.target.value)}}/>
        <button onClick={handleregister}>Register</button>
    </div>
  )
}
