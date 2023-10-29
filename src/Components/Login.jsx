import React, { useState } from 'react'

export const Login = () => {
    const [email,setemail]=useState("")
    const [pass,setpassword]=useState("")
    const handleLogin=()=>{
        const data={
            email,
            pass
        }
        fetch("https://clean-slippers-goat.cyclic.app/users/login",{
          method:"POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
        }).then((res)=>{
          return res.json()
        })
        .then((data)=>{
          console.log(data)
          localStorage.setItem("token",data.token)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  return (
    <div>
        <h3>Log In</h3>
        <input type='email' placeholder='"Enter email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        <input type='password' placeholder='Enter password' value={pass} onChange={(e)=>{setpassword(e.target.value)}}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
