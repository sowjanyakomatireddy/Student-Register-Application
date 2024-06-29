import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  let[individual,setIndividualData]=useState(
    {
      name:"",
      degree:"",
      course:"",
      yop:"",
      percentage:""
    }
  )
  console.log(individual)
 let {id}=useParams()
 useEffect(()=>{
  let fetchData=async()=>{
      let {data}=await axios.get(`http://localhost:3000/students/${id}`)
        setIndividualData(data)
  }
  fetchData()
    },[])
 let navigate=useNavigate()
 let {name,degree,course,yop,percentage}=individual


let handleChange=(e)=>{
  let{name,value}= e.target 
  setIndividualData({...individual,[name]:value})
}
  let handleUpdate=(e)=>{

    e.preventDefault()

    axios.put(`http://localhost:3000/students/${id}`,individual)

    navigate('/')
  }

  return (
    <form onSubmit={handleUpdate}>
       <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" value={name} onChange={handleChange} />
      <br /><br />
      <label htmlFor="degree">Degree:</label>
      <input type="text" name="degree" id="degree" value={degree} onChange={handleChange}/>
      <br /><br />
      <label htmlFor="course">Course:</label>
      <input type="text" name="course" id="course" value={course} onChange={handleChange} />
      <br /><br />
      <label htmlFor="yop">Yop:</label>
      <input type="tel" name="yop" id="yop" value={yop} onChange={handleChange} />
      <br /><br />
      <label htmlFor="percentage">Percentage:</label>
      <input type="text" name="percentage" id="percentage" value={percentage} onChange={handleChange}/>
      <br /><br />
      <input type="submit" value="Update" id='sub'/>
      <button onClick={()=>navigate('/')} id='goback'>GOBACK</button>
    </form>
  )
}

export default Update