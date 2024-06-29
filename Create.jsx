import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
// import toast, { Toaster } from 'react-hot-toast';
// import { color, style } from 'd3';
// import { Icons, ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Create = () => {
  let navigate = useNavigate()
  let formik =useFormik({
    initialValues:{
      name:"",
      degree:"",
      course:"",
      yop:"",
      percentage:""
    },
    onSubmit:(finalData)=>{
       axios.post("http://localhost:3000/students",finalData)
    //    toast('Successfully Registered',{
    //      icon:"❤️",
    //     style:{
    //       color:"red",
    //     },
    //    }
     
       
    //    )
    //    setInterval(()=>{
         navigate("/")
    //    },4000)
   
    
    // }     
        }     
  })
   let {name,degree,course,yop,percentage} = formik.values

  return (
    <div id='one'>
    <form onSubmit={formik.handleSubmit}>
      <div id='cform'> 
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" value={name} onChange={formik.handleChange} className='cname'/>
      <br /><br />
      <label htmlFor="degree">Degree:</label>
      <input type="text" name="degree" id="degree" value={degree} onChange={formik.handleChange}/>
      <br /><br />
      <label htmlFor="course">Course:</label>
      <input type="text" name="course" id="course" value={course} onChange={formik.handleChange}/>
      <br /><br />
      <label htmlFor="yop">Yop:</label>
      <input type="tel" name="yop" id="yop" value={yop} onChange={formik.handleChange}/>
      <br /><br />
      <label htmlFor="percentage">Percentage:</label>
      <input type="text" name="percentage" id="percentage" value={percentage} onChange={formik.handleChange}/>
      <br /><br />
      </div>
      <input type="submit" value="Register" id='reg'/>
      {/* <Toaster /> */}
      {/* <ToastContainer /> */}
      <button onClick={()=>navigate('/')} id='go'>Go back</button>  
       
   
    </form>
    </div>
  )
}

export default Create
