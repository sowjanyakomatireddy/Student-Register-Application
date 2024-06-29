import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { FaBars } from "react-icons/fa6";
// import { number } from 'prop-types'
import { element } from 'prop-types'
import { useNavigate } from 'react-router-dom'
const Home = () => {
 let[studentData,setStudentData]= useState(null)
  useEffect(()=>{
let fetchData= async()=>{
 let {data}=await axios.get("http://localhost:3000/students")

setStudentData(data)
// console.log(data)
}
fetchData()
  },[])
  let navigate=useNavigate()
  let handleRegister=()=>{
    navigate("/Create")
  }
  let handleDelete=(id)=>{
    axios.delete(`http://localhost:3000/students/${id}`)
    location.reload()
  }
  return (
   <>
   <button onClick={handleRegister} id='register'>Register <FaBars /></button>
    <table border={3} style={{width:'100%'}} cellPadding={10}>

      <thead>
<tr>
        <th>SL.NO</th>
        <th>NAME</th>
        <th>DEGREE</th>
        <th>COURSE</th>
        <th>Y.O.P</th>
        <th>PERCENTAGE</th>
        </tr>
      </thead>
      <tbody>
       
          {
          studentData==null?"Loading..":studentData.
          map((element,index)=>{

            return(
              <Fragment key={element.id}>
           
              <tr>
              <td>{index+1}</td>
              <td>{element.name}</td>
              <td>{element.degree}</td>
              <td>{element.course}</td>
              <td>{element.yop}</td>
              <td>{element.percentage}</td>
              <td>
                <button onClick={()=>navigate(`/Read/${element.id}`)} id='read'>Read</button>
              </td>
              <td>
                <button onClick={()=>navigate(`/Update/${element.id}`)} id='update'>Update</button>
              </td>
              <td>
                <button onClick={()=>handleDelete(element.id)} id='delete'>Delete</button>
              </td>
            </tr>
        
            </Fragment>
            )
          })
          
          
          
          
          }
       
      </tbody>
    </table>
    </>
  )
}

export default Home





