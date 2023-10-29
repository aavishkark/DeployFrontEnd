import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
export const Notes = () => {
    const navigate=useNavigate()
    const [notes,setnotes]=useState([])
    useEffect(()=>{
        fetch("https://clean-slippers-goat.cyclic.app/notes/",{
            method:"GET",
            headers:{
              'Content-Type': 'application/json',
              "token":`Bearer ${localStorage.getItem('token')}`
            },
          }).then((res)=>{
            return res.json()
          })
          .then((data)=>{
            setnotes(data.Notes)
            console.log(notes)
          })
          .catch((err)=>{
            console.log(err)
          })
    },[])
     const handledelete=(id)=>{
        fetch(`https://clean-slippers-goat.cyclic.app/notes/delete/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type': 'application/json',
                "token":`Bearer ${localStorage.getItem('token')}`
              }
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
    <>
    <div>Notes In console</div>
    {notes.map((e)=>{
        return <div>
            <h3>{e.title}</h3>
            <h5>{e.body}</h5>
            <button onClick={()=>handledelete(e._id)}>Delete</button>
            <button onClick={()=>{navigate(`/update/${e._id}`)}}>Update</button>
        </div>
    })}
    </>
    
  )
}
