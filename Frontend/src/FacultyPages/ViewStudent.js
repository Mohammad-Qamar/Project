// import React from 'react'
// import FacultyNavBar from './FacultyNavBar'
// import { useEffect ,useState} from 'react';
// import axios from 'axios';



// function markAttendance(){
//   const[searchText,setSearchText] = useEffect('')

//   const handleSearchText = (e) =>{
//     setSearchText(e.target.value)
//     console.log(searchText);
//   }

//   const [data,setData] =useState({students:[],})

// }


// function ViewStudent() {
//   const [searchText, setSearchText] = useState('')

//   const handleSearchText = (e) => {
//     setSearchText(e.target.value)
//     console.log(searchText);
// }

//   const [data, setData] = useState({students: [], isFetching: false});
//     useEffect(() => {
//       const fetchstudents= async () => {
//           try {
//             setData((data)=>({students:data.students,isFetching:true}));
//             const response =await axios.get('http://localhost:8087/student-attendance-management/api/students/view')
//             setData({students:response.data,isFetching:false});
//             console.log(response);
//             return response;
//           } catch (e) {
//               console.log(e);
//               setData((data)=>({students:data.students,isFetching:false}));
//           }
//       };
//       fetchstudents();
//   }, []);

//   return (
//     <div>
//     <FacultyNavBar/>
   
//     <div className='cotainer-fluid'>
//     <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
//     <div className="col-8 p-5 shadow bg-white">
//         <center><span><h1>Attendance Record</h1></span></center>
//           <div className='ui search'>
           
//             <br></br>
//           </div>
//         <div className='contain-table'>
//             <table className='table table-striped table-secondary'>
//                 <thead className='table-dark'>
//                     <tr>
//                         <th>Roll No.</th>
//                         <th> Name</th>
//                         <th>Email</th>
//                         <th>Present</th>
//                         <th>Absent</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//              {
//              data.students.filter((val)=>{
//               if(searchText==""){
//                 return val
//               }else if(val.name.toLowerCase().includes(searchText.toLowerCase()) ||val.email.toLowerCase().includes(searchText.toLowerCase())){
//               return val
//             }
//              })
//              .map(({prn,name,dob,mobNo,email,address})=>
//              <tr>
//               <td>{prn}</td>
//               <td>{name}</td>
//              {/* {<td>{dob}</td> } */}
//               {/* { <td>{mobNo}</td> } */}
//               <td>{email}</td>
              
//              </tr>
//              )}
//                 </tbody>
//             </table>  
//         </div>
       
//     </div>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default ViewStudent




/*

import React, { useState } from 'react';


const MyTable = () => {
  const [selectedCells, setSelectedCells] = useState([]);

  const handleCheckboxChange = (rowIndex, colIndex) => {
    const updatedCells = [...selectedCells];
    const cellKey = `${rowIndex}-${colIndex}`;
    
    if (updatedCells.includes(cellKey)) {
      
      const index = updatedCells.indexOf(cellKey);
      updatedCells.splice(index, 1);
    } else {
      
      updatedCells.push(cellKey);
    }

    setSelectedCells(updatedCells);
    
  };

  const data = [
    ['John Doe', 25, 'New York'],
    ['Jane Smith', 30, 'San Francisco'],
    ['Bob Johnson', 28, 'Chicago'],
    
  ];

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>PRN No</th>
          <th>Name</th>
          <th>Present</th>
          <th>Absent</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{rowIndex + 1}</td>
            {row.map((cell, colIndex) => (
              <td key={colIndex} className={selectedCells.includes(`${rowIndex}-${colIndex}`) ? 'selected-cell' : ''}>
                <input
                  type="radio"
                  checked={selectedCells.includes(`${rowIndex}-${colIndex}`)}
                  onChange={() => handleCheckboxChange(rowIndex, colIndex)}
                />
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
*/









/*

import React, { useState, useEffect } from 'react';
import FacultyNavBar from './FacultyNavBar';
import axios from 'axios';

function ViewStudent() {
  const [searchText, setSearchText] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);
  const [data, setData] = useState({ students: [], isFetching: false });

  useEffect(() => {
    const fetchstudents = async () => {
      try {
        setData((data) => ({ students: data.students, isFetching: true }));
        const response = await axios.get('http://localhost:8087/student-attendance-management/api/students/view');
        setData({ students: response.data, isFetching: false });
      } catch (e) {
        console.log(e);
        setData((data) => ({ students: data.students, isFetching: false }));
      }
    };
    fetchstudents();
  }, []);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  // const handleAttendanceChange = (index, value) => {
  //   const updatedAttendanceData = [...attendanceData];
  //   updatedAttendanceData[index] = value;
  //   setAttendanceData(updatedAttendanceData);
  // };
  const handleAttendanceChange = (index, value) => {
    const updatedAttendanceData = [...attendanceData];
    updatedAttendanceData[index] = { ...updatedAttendanceData[index], status: value };
    setAttendanceData(updatedAttendanceData);
  };
  

  // const submitAttendance = async () => {
  //   // Send attendance data to the backend for processing
  //   try {
  //     const response = await axios.post('http://localhost:8087/student-attendance-management/api/attendance/markAttendance', {
  //       attendanceData: attendanceData,
  //     });
  //     console.log(response.data);
  //     alert('Attendance marked successfully!');
  //   } catch (error) {
  //     console.error(error);
  //     alert('Failed to mark attendance. Please try again.');
  //   }
  // };
  
  
  // ///////////////////////////////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////
  
  
  // const submitAttendance = async () => {
  //   console.log("Attendance Data:", attendanceData); // Add this line for debugging
  //   // Send attendance data to the backend for processing
  //   try {
  //     const response = await axios.post('http://localhost:8087/student-attendance-management/api/attendance/markAttendance', {
  //       attendanceData: attendanceData,
  //     });
  //     console.log(response.data);
  //     alert('Attendance marked successfully!');
  //   } catch (error) {
  //     console.error(error);
  //     alert('Failed to mark attendance. Please try again.');
  //   }
  // };
  


  const submitAttendance = async () => {
    console.log("Attendance Data:", attendanceData); // Add this line for debugging
    try {
      const response = await axios.post('http://localhost:8087/student-attendance-management/api/attendance/markAttendance', {
        attendanceData: attendanceData.map(item => ({
          SessionId: item.sessionId,
          moduleName: item.moduleName,
          teacherId: item.teacherId,
          date: item.date,
          studentId: item.studentId,
          studentName: item.studentName,
          status: item.status
        })),
      });
      console.log(response.data);
      alert('Attendance marked successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to mark attendance. Please try again.');
    }
  };
  




  return (
    <div>
      <FacultyNavBar />
      <div className='cotainer-fluid'>
        <div className='row justify-content-around align-items-center' style={{ height: '98vh', marginTop: 0 }}>
          <div className='col-8 p-5 shadow bg-white'>
            <center>
              <span>
                <h1>Attendance Record</h1>
              </span>
            </center>
            <div className='ui search'>
              <br />
            </div>
            <div className='contain-table'>
              <table className='table table-striped table-secondary'>
                <thead className='table-dark'>
                  <tr>
                    <th>Roll No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Present</th>
                    <th>Absent</th>
                  </tr>
                </thead>
                <tbody>
                  {data.students
                    .filter((val) => {
                      if (searchText === '') {
                        return val;
                      } else if (
                        val.name.toLowerCase().includes(searchText.toLowerCase()) ||
                        val.email.toLowerCase().includes(searchText.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map(({ prn, name, email }, index) => (
                      <tr key={index}>
                        <td>{prn}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>
                          <input
                            type='radio'
                            name={`attendance_${index}`}
                            value='present'
                            onChange={() => handleAttendanceChange(index, 'present')}
                          />
                        </td>
                        <td>
                          <input
                            type='radio'
                            name={`attendance_${index}`}
                            value='absent'
                            onChange={() => handleAttendanceChange(index, 'absent')}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div>
              <button className='btn btn-primary' onClick={submitAttendance}>
                Submit Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStudent;



*/













// import React, { useState, useEffect } from 'react';
// import FacultyNavBar from './FacultyNavBar';
// import axios from 'axios';

// function ViewStudent() {
//   const [searchText, setSearchText] = useState('');
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [data, setData] = useState({ students: [], isFetching: false });
//   const [moduleName, setModuleName] = useState('');



//   useEffect(() => {
//   const fetchModuleName = async () => {
//     try {
//       const response = await axios.get('http://localhost:8087/student-attendance-management/api/teacher/teachers');
//       console.log("API Response Data:", response.data); // Log the response data
//       // Assuming the response data is an array of objects, we'll access the first item
//       if (response.data.length > 0) {
//         const moduleNameFromAPI = response.data[0].moduleName; // Accessing moduleName from the first object
//         console.log("Fetched module name:", moduleNameFromAPI);
//         setModuleName(moduleNameFromAPI);
//       } else {
//         console.error("No data received from the API");
//       }
//     } catch (error) {
//       console.error("Failed to fetch module name:", error);
//     }
//   };
//   fetchModuleName();
// }, []);

  
//   useEffect(() => {
//     console.log("ModuleName state:", moduleName);
//   }, [moduleName]);






//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         setData({ students: [], isFetching: true });
//         const response = await axios.get('http://localhost:8087/student-attendance-management/api/students/view');
//         setData({ students: response.data, isFetching: false });
//         // Initialize attendance data with default values for each student
//         setAttendanceData(response.data.map(student => ({ studentId: student.id, status: 'absent' })));
//       } catch (e) {
//         console.log(e);
//         setData({ students: [], isFetching: false });
//       }
//     };
//     fetchStudents();
//   }, []);

//   const handleSearchText = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleAttendanceChange = (index, value) => {
//     const updatedAttendanceData = [...attendanceData];
//     updatedAttendanceData[index] = { ...updatedAttendanceData[index], status: value };
//     setAttendanceData(updatedAttendanceData);
//   };

//   const submitAttendance = async () => {
//     console.log("Attendance Data:", attendanceData);
//     try {
//       const response = await axios.post('http://localhost:8087/student-attendance-management/api/attendance/markAttendance', {
//         attendanceData: attendanceData,
//       });
//       console.log(response.data);
//       alert('Attendance marked successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Failed to mark attendance. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <FacultyNavBar />
//       <div className='container-fluid'>
//         <div className='row justify-content-around align-items-center' style={{ height: '98vh', marginTop: 0 }}>
//           <div className='col-8 p-5 shadow bg-white'>
//             <center>
//               <span>
//                 <h1>Attendance Record</h1>
//               </span>
//             <div className='module-name'>
//               <p>Module Name: {moduleName}</p>
//             </div>
//             </center>
//             <div className='ui search'>
//               <input type='text' className='form-control' placeholder='Search by name or email' onChange={handleSearchText} />
//             </div>
//             <div className='contain-table'>
//               <table className='table table-striped table-secondary'>
//                 <thead className='table-dark'>
//                   <tr>
//                     <th>Roll No.</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Present</th>
//                     <th>Absent</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.students
//                     .filter((val) => {
//                       if (searchText === '') {
//                         return val;
//                       } else if (
//                         val.name.toLowerCase().includes(searchText.toLowerCase()) ||
//                         val.email.toLowerCase().includes(searchText.toLowerCase())
//                       ) {
//                         return val;
//                       }
//                     })
//                     .map(({sid,prn,name,username,email}, index) => (
//                       <tr key={index}>
//                         <td>{prn}</td>
//                         {/* <td>{sid}</td> */}
//                         <td>{name}</td>
//                         <td>{email}</td>
//                         <td>
//                           <input
//                             type='radio'
//                             name={`attendance_${index}`}
//                             value='present'
//                             onChange={() => handleAttendanceChange(index, 'present')}
//                           />
//                         </td>
//                         <td>
//                           <input
//                             type='radio'
//                             name={`attendance_${index}`}
//                             value='absent'
//                             onChange={() => handleAttendanceChange(index, 'absent')}
//                             checked={attendanceData[index]?.status === 'absent'}
//                           />
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//             <div>
//               <button className='btn btn-primary' onClick={submitAttendance}>
//                 Submit Attendance
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ViewStudent;













import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FacultyNavBar from './FacultyNavBar';
import axios from 'axios';

function ViewStudent() {
  const [searchText, setSearchText] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);
  const [data, setData] = useState({ students: [], isFetching: false });
  const [moduleName, setModuleName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchModuleName = async () => {
      try {
        const response = await axios.get('http://localhost:8087/student-attendance-management/api/teacher/teachers');
        if (response.data.length > 0) {
          const moduleNameFromAPI = response.data[0].moduleName;
          setModuleName(moduleNameFromAPI);
        } else {
          console.error("No data received from the API");
        }
      } catch (error) {
        console.error("Failed to fetch module name:", error);
      }
    };
    fetchModuleName();
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setData({ students: [], isFetching: true });
        const response = await axios.get('http://localhost:8087/student-attendance-management/api/students/view');
        setData({ students: response.data, isFetching: false });
        setAttendanceData(response.data.map(student => ({
          prn: student.prn,
          studentName: student.name,
          status: 'absent'
        })));
      } catch (error) {
        console.error("Failed to fetch student data:", error);
        setData({ students: [], isFetching: false });
      }
    };
    fetchStudents();
  }, []);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleAttendanceChange = (index, value) => {
    const updatedAttendanceData = [...attendanceData];
    updatedAttendanceData[index] = { ...updatedAttendanceData[index], status: value };
    setAttendanceData(updatedAttendanceData);
  };

  const submitAttendance = async () => {
    try {
      const currentDate = new Date().toISOString().slice(0, 10);
      const attendancePayload = attendanceData.map(student => ({
        moduleName: moduleName,
        prn: student.prn,
        date: currentDate,
        studentName: student.studentName,
        status: student.status
      }));
      const response = await axios.post('http://localhost:8087/student-attendance-management/api/attendance/markAttendance', attendancePayload);
      console.log(response.data);
      alert('Attendance marked successfully!');
      navigate('/faculty');
    } catch (error) {
      console.error("Failed to mark attendance:", error);
      alert('Failed to mark attendance. Please try again.');
    }
  };

  return (
    <div>
      <FacultyNavBar />
      <div className='container-fluid'>
        <div className='row justify-content-around align-items-center' style={{ height: '98vh', marginTop: 0 }}>
          <div className='col-8 p-5 shadow bg-white'>
            <center>
              <span>
                <h1>Attendance Record</h1>
              </span>
              <div className='module-name'>
                <p><b>Module Name: {moduleName}</b></p>
              </div>
            </center>
            {/* <div className='ui search'>
              <input type='text' className='form-control' placeholder='Search by name or email' onChange={handleSearchText} />
            </div> */}
            <div className='contain-table'>
              <table className='table table-striped table-secondary'>
                <thead className='table-dark'>
                  <tr>
                    <th>PRN</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Present</th>
                    <th>Absent</th>
                  </tr>
                </thead>
                <tbody>
                  {data.students
                    .filter((val) => {
                      if (searchText === '') {
                        return val;
                      } else if (
                        val.name.toLowerCase().includes(searchText.toLowerCase()) ||
                        val.email.toLowerCase().includes(searchText.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map(({ prn, name, email }, index) => (
                      <tr key={index}>
                        <td>{prn}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>
                          <input
                            type='radio'
                            name={`attendance_${index}`}
                            value='present'
                            onChange={() => handleAttendanceChange(index, 'present')}
                          />
                        </td>
                        <td>
                          <input
                            type='radio'
                            name={`attendance_${index}`}
                            value='absent'
                            onChange={() => handleAttendanceChange(index, 'absent')}
                            checked={attendanceData[index]?.status === 'absent'}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div>
            <button className='btn btn-primary' onClick={submitAttendance}>
                Submit Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStudent;

