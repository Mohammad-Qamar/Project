import React from 'react'
import AdminNavBar from './AdminNavBar';
import {useNavigate} from 'react-router-dom';
import { useEffect ,useState} from 'react';
import axios from 'axios';

function AdminViewStudent() {
  const [data, setData] = useState({students: [], isFetching: false});
  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
}
  const navigate = useNavigate();
  useEffect(() => {
    const fetchstudents= async () => {
        try {
          setData((data)=>({students:data.students,isFetching:true}));
          const response =await axios.get('http://localhost:8087/student-attendance-management/api/students/view')
          setData({students:response.data,isFetching:false});
          console.log(response);
          return response;
        } catch (e) {
            console.log(e);
            setData((data)=>({students:data.students,isFetching:false}));
        }
    };
          fetchstudents();
      }, []);

//  const removeStudent=(prn) => {
//   axios.delete(`http://localhost:8087/student-attendance-management/api/students/delete/${prn}`).then((response) => {
   
//   alert("Student record with Id " + prn + " deleted!");
//     navigate('/admin/viewstudent')
//     navigate('/admin/viewstudent')
//   }).catch(error => {
//     alert("Error Ocurred in remove Student :" + error);
//   });

// }
const removeStudent = (prn) => {
  axios.delete(`http://localhost:8087/student-attendance-management/api/students/delete/${prn}`)
    .then((response) => {
      alert("Student record with PRN " + prn + " deleted!");
      navigate('/admin/viewstudent');
    })
    .catch(error => {
      alert("Error occurred while removing student: " + error);
    });
}


  return(
    <div>
           <AdminNavBar></AdminNavBar>
           <form>
      <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-8 p-5 shadow bg-white">
           <center><span><h1>View Student Details </h1></span></center>
           <div className='ui search'>
            {/* <div className='ui icon input'>
            <button><i class="bi bi-search"></i></button>
              <input type='text' placeholder='Enter name or gmail' className='prompt' name="searchText" onChange={handleSearchText} value= {searchText}></input>
              
            </div> */}
            <br></br>
          </div>
           <table className="table table-striped table-secondary">
                 <thead className='table-dark'>
                   <tr>
                <th>Sr No.</th>
                <th>PRN</th>
                <th>Name</th>
                <th>Username</th>
                {/* <th>Mobile Number</th> */}
                <th>Email</th>
                 <th>Action</th> 
                {/* <th>Action</th> */}
            </tr>
        </thead>
        <tbody>
         
        {
             data.students.filter((val)=>{
              if(searchText==""){
                return val
              }else if(val.name.toLowerCase().includes(searchText.toLowerCase()) ||val.email.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
             })
        .map(({sid,prn,name,username,email})=>
             <tr>
              <td>
                {sid}
              </td>
              <td>
                {prn}
              </td>
              <td>
                {name}
              </td>
              <td>
                {username}
              </td>
              <td>
                {email}
              </td>
           <td>
              <button className="button muted-button" onClick={()=>navigate(`/admin/editstudent/${prn}`)}>Edit</button>
              {/* <button className="button muted-button" onClick={() => removeFaculty({id})}>Delete</button> */}
              <button className="button muted-button" onClick={() => removeStudent(prn)}>Delete</button>
            </td>
          </tr>
          )}
        </tbody>
    </table> 
    </div>
    </div>
 </div>
 </form>
 </div>  
)
}

export default AdminViewStudent;