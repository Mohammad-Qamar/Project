/*import StudentNavBar from "./StudentNavBar"
import React from 'react';
import { useEffect ,useState} from 'react';
import axios from 'axios';
function NoticeBoard() {
   const [data, setData] = useState({noticeboards: [], isFetching: false});
   const [searchText, setSearchText] = useState('')

   const handleSearchText = (e) => {
     setSearchText(e.target.value)
     console.log(searchText);
 }
    useEffect(() => {
      const fetchnoticeboards= async () => {
          try {
            setData((data)=>({noticeboards:data.noticeboards,isFetching:true}));
            const response =await axios.get('http://localhost:8080/student/noticeboard')
            setData({noticeboards:response.data,isFetching:false});
            console.log(response);
            return response;
          } catch (e) {
              console.log(e);
              setData((data)=>({noticeboards:data.noticeboards,isFetching:false}));
          }
      };
      fetchnoticeboards();
  }, []);
    return (
          <div>
            <StudentNavBar/>
            <div className='cotainer-fluid'>
    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:-25}}>
    
    <div className="col-8 p-5 shadow" style={{backgroundColor : 'white'}}>
    <center><span><h1>View NoticeBoard</h1></span></center>
    <div className='ui icon input'>
              <input type='text' placeholder='Enter faculty name or module name' className='prompt' name="searchText" onChange={handleSearchText} value= {searchText}></input>
              <button ><i class="bi bi-search"></i></button>
            </div>
            <br></br>
            {
             data.noticeboards.filter((val)=>{
              if(searchText==""){
                return val
              }else if(val.moduleName.toLowerCase().includes(searchText.toLowerCase()) || val.facultyName.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
             })
            .map(({description,date,facultyName,moduleName})=>
             <table className="table border table-striped table-secondary" style={{cellspacing:'5'}}>
               <tr>
                  <td>
                    Description :  {description}
                  </td>
                  </tr>
                  <tr>
                  <td>
                     Publish Date : {date}
                     
                  </td>
                  </tr>
                  <tr>
                  <td>
                     Faculty Name : {facultyName}
                  </td>
                  </tr>
                  <tr>
                  <td>
                     Module Name : {moduleName}
                  </td>
                  </tr>
             </table>
             )}
        
         </div>
         </div>

     </div>
          </div>
    );
  }
  
  export default NoticeBoard;

  -----------------------
  */

  // App.js

import React, { useState, useEffect } from 'react';
// import './App.css';

const App = () => {
  const [subjects, setSubjects] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});

  useEffect(() => {
    // Fetch subjects from API or use your data fetching logic
    const fetchSubjects = async () => {
      // Replace with your actual API endpoint or data fetching logic
      const mockSubjects = ['CORE JAVA', 'DBMS', 'WPT','DOT NET','ADVANCE JAVA'];
      setSubjects(mockSubjects);
    };

    fetchSubjects();
  }, []);

  useEffect(() => {
    // Fetch attendance data for each subject from API or use your data fetching logic
    const fetchAttendanceData = async () => {
      // Replace with your actual API endpoint or data fetching logic
      const mockAttendanceData = {
        Math: {
          '2024-02-15': 'Present',
          '2024-02-16': 'Absent',
          // Add more date-wise data as needed
        },
        Science: {
          '2024-02-15': 'Present',
          '2024-02-16': 'Present',
        },
        History: {
          '2024-02-15': 'Absent',
          '2024-02-16': 'Absent',
        },
      };

      setAttendanceData(mockAttendanceData);
    };

    fetchAttendanceData();
  }, []);

  const calculateAverageAttendance = (subject) => {
    const dates = Object.keys(attendanceData[subject] || {});
    const totalDays = dates.length;

    if (totalDays === 0) {
      return 0; // Handle division by zero
    }

    const presentDays = dates.filter((date) => attendanceData[subject][date] === 'Present').length;
    return (presentDays / totalDays) * 100;
  };

  return (
    <div className="app">
      <h1>Subject-wise Average Attendance</h1>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Average Attendance</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject}>
              <td>{subject}</td>
              <td>{calculateAverageAttendance(subject).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
