// import './Style.css';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Signin() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = () => {
//     if (email === '') {
//       document.getElementById('emailErrorMsg').innerHTML = 'Email should not be blank';
//     }
//     if (password === '') {
//       document.getElementById('passErrorMsg').innerHTML = 'Password should not be blank';
//     }
//     if (email === '' && password === '') {
//       document.getElementById('passErrorMsg').innerHTML = 'Password and email should not be blank';
//     }

//     // Simulate successful login without API call
//     const userRole = 'ROLE_STUDENT'; // Set the user role based on your logic

//     sessionStorage.setItem('userName', 'John Doe'); // Set user details based on your logic
//     sessionStorage.setItem('userId', '1');
//     sessionStorage.setItem('userRole', userRole);

//     if (userRole === 'ROLE_STUDENT') navigate('/student');
//     else if (userRole === 'ROLE_FACULTY') navigate('/faculty');
//     else if (userRole === 'ROLE_ADMIN') navigate('/admin');
//   };

//   return (
//     <div>
//       <NavBar></NavBar>
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       <div className="container-fluid">
//         <div className="row justify-content-around align-items-center" style={{ height: '98vh' }}>
//           <div className="col-4 p-5 shadow">
//             <h3 className="head">Login</h3>
//             <div className="ui form">
//               <div className="field">
//                 <label>Email Address</label>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control"
//                     placeholder="Enter Email"
//                     onChange={handleEmail}
//                     value={email}
//                     required
//                   />
//                   <div id="emailErrorMsg"></div>
//                 </div>
//               </div>
//               <div className="field">
//                 <label>Passsssssssssssssword</label>
//                 <div className="mb-3">
//                   <input
//                     type="password"
//                     name="pass"
//                     className="form-control"
//                     placeholder="Enter Password"
//                     onChange={handlePassword}
//                     value={password}
//                     required
//                   />
//                 </div>
//                 <div id="passErrorMsg"></div>
//               </div>
//               <div className="mb-3 py-3" style={{ textAlign: 'center' }}>
//                 <button className="btn btn-primary form-control" onClick={handleLogin} disabled={!email || !password}>
//                   Sign in
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signin;
//==========================================================




import './Style.css';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('student');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setSelectedRole(e.target.value);

  const handleLogin = async () => {
    // Perform authentication logic based on email, password, and selectedRole
    // ...

    // Redirect based on the selected role
    try{

      let validationEndpoint;

    // Select the validation endpoint based on the selected role
    switch (selectedRole) {
      case 'student':
        validationEndpoint = "http://localhost:8087/student-attendance-management/api/students/login";
        break;
      case 'faculty':
        validationEndpoint = "http://localhost:8087/student-attendance-management/api/teacher/login";
        break;
      case 'admin':
        validationEndpoint = "http://localhost:8087/student-attendance-management/api/admin/login";
        break;
      default:
        // Handle unexpected role
        return;
    }

      const response = await fetch(validationEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          // role: selectedRole,
        }),
      });

    if (response.ok) {
    switch (selectedRole) {
      case 'student':
        window.location.href = '/student'; // Navigate to /student
        break;
      case 'faculty':
        window.location.href = '/faculty'; // Navigate to /faculty
        break;
      case 'admin':
        window.location.href = '/admin'; // Navigate to /admin
        break;
      default:
        // Handle unexpected role
        break;
    }
  }else {
    // Authentication failed, display error message
    toast.error('Authentication failed. Please check your credentials.');
  }
}
catch (error) {
    console.error('Error during authentication:', error);
    toast.error('An error occurred during authentication. Please try again later.');
  }
  };

  return (
           <div>
             <NavBar></NavBar>
             <ToastContainer
               position="top-center"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
             />
       
       
       
       
             <div className="container-fluid">
               <div className="row justify-content-around align-items-center" style={{ height: '98vh' }}>
                 <div className="col-4 p-5 shadow">
                   <h3 className="head">Login</h3>
                   <div className="ui form">
                     <div className="field">
                       <label>Email Address</label>
                       <div className="mb-3">
                         <input
                           type="email"
                           name="email"
                           className="form-control"
                           placeholder="Enter Email"
                           onChange={handleEmailChange}
                           value={email}
                           required
                         />
                         <div id="emailErrorMsg"></div>
                       </div>
                     </div>
                     <div className="field">
                       <label>Password</label>
                       <div className="mb-3">
                         <input
                           type="password"
                           name="pass"
                           className="form-control"
                           placeholder="Enter Password"
                           onChange={handlePasswordChange}
                           value={password}
                           required
                         />
                       </div>
                       <div>
          <label>Role </label>
          <select value={selectedRole} onChange={handleRoleChange}>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>
        </div>
                       <div id="passErrorMsg"></div>
                     </div>
                     <div className="mb-3 py-3" style={{ textAlign: 'center' }}>
                       <button className="btn btn-primary form-control" onClick={handleLogin} disabled={!email || !password}>
                         Sign in
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         );
       }
       
       export default LoginForm;