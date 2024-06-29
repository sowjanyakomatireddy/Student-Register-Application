
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Read = () => {
  let navigate=useNavigate()
  let parameter=useParams()
  let [individualData,setIndividualData]=useState("")
  let{name,degree,course,yop,percentage}=individualData
  useEffect(()=>{
    let fetchData=async()=>{
    let {data}=await axios.get(`http://localhost:3000/students/${parameter.id}`)
    setIndividualData(data)
    }
    fetchData()
  },[])
  return (
    <div id='two'>
    
      <h1>Name:{name}</h1>
 
    
      <h1>Degree:{degree}</h1>
 

      <h1>Course:{course}</h1>

      <h1>Y.O.P:{yop}</h1>

      <h1>Percentage:{percentage}</h1>
      <button onClick={()=>navigate('/') } id='back'>GOBACK</button> 
      <button onClick={()=>navigate('/Update/{element.id}')} id='up'>UPDATE</button>
    </div>
  )
}

export default Read