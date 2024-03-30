import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditFaculty() {
  const navigate = useNavigate();
  const param = useParams();
  const facultyId = param.id;
  const updateurl = `http://localhost:8080/admin/editfaculty/${param.id}`;
  const editURL = `http://localhost:8080/admin/editfaculty/${param.id}`;

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [moduleName, setModuleName] = useState("");

  useEffect(() => {
    axios
      .get(editURL)
      .then((response) => {
        const facultyData = response.data;
        setName(facultyData.data.name);
        setEmail(facultyData.data.email);
        setUsername(facultyData.data.username);
        setAddress(facultyData.data.address);
        setPassword(facultyData.data.password);
        setModuleName(facultyData.data.moduleName);
      })
      .catch((error) => {
        alert("Error Occurred while getting employee detail: " + error);
      });
  }, []);

  function submit(e) {
    e.preventDefault();
    axios
      .put(updateurl, {
        name: name,
        dob: dob,
        mobNo: mobNo,
        email: email,
        username: username,
        address: address,
        password: password,
        moduleName: moduleName,
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.error("Error updating faculty:", error));

    alert("Faculty With Id " + facultyId + " Updated Successfully");
    navigate("/admin/viewfaculty");
  }

  return (
    <div>
      <AdminNavBar />
      <div className="cotainer-fluid">
        <div
          className="row justify-content-around align-items-center"
          style={{ height: "98vh", marginTop: 0 }}
        >
          <div className="col-4 p-5 shadow bg-white">
            <span className="fs-3 mb-3">
              <center>Edit Faculty</center>
            </span>

            <form onSubmit={(e) => submit(e)}>
              <div className="mb-3">
                <label htmlFor="name">Faculty Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Faculty Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="col-4"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  name="username"
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="col-5"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                />
                <br />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <br />
                <textarea
                  className="col-5 form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="moduleName">Module Name</label>
                <br />
                <textarea
                  className="col-100 form-control"
                  onChange={(e) => setModuleName(e.target.value)}
                  value={moduleName}
                  name="moduleName"
                ></textarea>
              </div>
              <br />
              <div className="mb-3">
                <button className="btn btn-primary form-control">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditFaculty;
