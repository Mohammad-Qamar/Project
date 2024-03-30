// import React, { useState } from 'react'
// import axios from 'axios';
// import AdminNavBar from './AdminNavBar';
// import {useNavigate} from 'react-router-dom';

// function AddStudent() {
//     const url="http://localhost:8087/student-attendance-management/api/admin/registerStudent"
//     const navigate = useNavigate();
//     const[data,setData]=useState({
//         name:"",
//         // dob:"",
//         prn:"",
//         username:"",
//         email:"",
//         // address:"",
//         password:""
//     })
//     function submit(e){
//         e.preventDefault();
//         axios.post(url,{
//             name:data.name,
//             //dob: data.dob,
//             prn: data.prn,
//             username:data.username,
//             email: data.email,
//             // address: data.address,
//             password: data.password
//         }).then(res=>
//             console.log(res.data)
//             )
//             alert("Student Added Successfully!!")
//             navigate('/admin')
//     }
    

//     function handle(e){
//         const newData={...data}
//         newData[e.target.id]=e.target.value
//         setData(newData)
//         console.log(newData)
//     }
//   return (

//     <div>
//         <AdminNavBar/>
//         <div className='cotainer-fluid'>
//        <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
//        <div className="col-4 p-4 shadow bg-white">
//             <span className='fs-3 mb-3'><center>Add Student</center></span>
//     <form onSubmit={(e)=>submit(e)}>
//           <div className='mb-3'>
//            <lable>Student Name</lable><br></br>
          
//             <input type='text' placeholder='Enter Student Name'className='form-control' onChange={(e)=>handle(e)} id='name' value={data.value}></input>
//            </div>
//            {/* <div className='mb-3'>
//              <label>Date Of Birth</label>
//              <input type ='date' className='form-control' placeholder='Enter date'onChange={(e)=>handle(e)} id='dob' value={data.value}></input>
//            </div> */}
          
//            <div className='mb-3'>
//               <label>PRN: </label>
//               <input type='text' className='col-4' onChange={(e)=>handle(e)} id='prn' value={data.value}></input>
//                 &nbsp;
//                 <br></br>
//               <label>Email:</label> 
//               <input type='email' className='col-5' onChange={(e)=>handle(e)} id='email' value={data.value}></input ><br></br>
              
//            </div>
//            <div className='mb-3'>
//              <label>UserName</label><br></br>
//              <textarea className='col-100  form-control'onChange={(e)=>handle(e)} id='username' value={data.value}> </textarea>
//            </div>

//            <div className='mb-3'>
//                <label>Password</label>
//               <input type='password' className='form-control' onChange={(e)=>handle(e)} id='password' value={data.value}></input>
//            </div>
//            <br></br>
//            <div className='mb-3'>
//            <button className='btn btn-primary form-control'>Submit</button>
//            </div>   
//            </form>
//        </div>
//        </div>
//        </div>
//         </div>
//   )
// }

// export default AddStudent



import React, { useState } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
    const url = "http://localhost:8087/student-attendance-management/api/students/register";
    const navigate = useNavigate();
    const [data, setData] = useState({
      email: "",  
      name: "",
      password: "",  
      prn: "",
      username: "",
        
        
    });

    const handle = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    }

    const submit = () => {
        axios.post(url, data)
            .then((res) => {
                console.log(res.data);
                alert("Student Added Successfully!!");
                navigate('/admin');
            })
            .catch((err) => {
                console.error(err);
                alert("Error adding student. Please try again.");
            });
    }

    return (
        <div>
            <AdminNavBar />
            <div className='cotainer-fluid'>
                <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: 0 }}>
                    <div className="col-4 p-4 shadow bg-white">
                        <span className='fs-3 mb-3'><center>Add Student</center></span>
                        <div>
                            <label>Student Name</label><br />
                            <input type='text' placeholder='Enter Student Name' className='form-control' onChange={(e) => handle(e)} id='name' value={data.name}></input>
                        </div>
                        <div>
                            <label>PRN</label><br />
                            <input type='text' placeholder='Enter PRN' className='form-control' onChange={(e) => handle(e)} id='prn' value={data.prn}></input>
                        </div>
                        <div>
                            <label>Email</label><br />
                            <input type='email' placeholder='Enter Email' className='form-control' onChange={(e) => handle(e)} id='email' value={data.email}></input>
                        </div>
                        <div>
                            <label>Username</label><br />
                            <input type='text' placeholder='Enter Username' className='form-control' onChange={(e) => handle(e)} id='username' value={data.username}></input>
                        </div>
                        <div>
                            <label>Password</label><br />
                            <input type='password' placeholder='Enter Password' className='form-control' onChange={(e) => handle(e)} id='password' value={data.password}></input>
                        </div>
                        <br />
                        <div>
                            <button className='btn btn-primary form-control' onClick={submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddStudent;
