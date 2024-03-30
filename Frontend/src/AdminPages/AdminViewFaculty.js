import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminViewFaculty() {
  const [data, setData] = useState({ faculties: [], isFetching: false });
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const fetchFaculties = async () => {
    try {
      setData((prevData) => ({ ...prevData, isFetching: true }));
      const response = await axios.get(
        "http://localhost:8087/student-attendance-management/api/teacher/teachers"
      );
      setData({ faculties: response.data, isFetching: false });
      return response;
    } catch (error) {
      console.error("Error fetching faculties:", error);
      setData((prevData) => ({ ...prevData, isFetching: false }));
      throw error;
    }
  };

  useEffect(() => {
    fetchFaculties();
  }, []);

  const removeFaculty = async (email) => {
    try {
      await axios.delete(
        `http://localhost:8087/student-attendance-management/api/teacher/delete/${email}`
      );
      alert("Faculty record " + email + " deleted!");
      await fetchFaculties();
      navigate("/admin/viewfaculty");
    } catch (error) {
      alert("Error occurred in removing faculty: " + error.message);
    }
  };

  return (
    <div>
      <AdminNavBar />
      <div className="container-fluid">
        <div
          className="row justify-content-around align-items-center"
          style={{ height: "98vh", marginTop: 0 }}
        >
          <div className="col-8 p-5 shadow bg-white">
            <center>
              <h1>View Faculty Details</h1>
            </center>
            <div className="ui search">
              <input
                type="text"
                placeholder="Search by name or email"
                value={searchText}
                onChange={handleSearchText}
              />
            </div>
            <table className="table table-striped table-secondary">
              <thead className="table-dark">
                <tr>
                  <th>Sr No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Module Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.faculties
                  .filter((val) => {
                    if (searchText === "") {
                      return true;
                    }
                    return (
                      val.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                      val.email.toLowerCase().includes(searchText.toLowerCase())
                    );
                  })
                  .map(({ teacherId, name, email, moduleName }) => (
                    <tr key={teacherId}>
                      <td>{teacherId}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{moduleName}</td>
                      <td>
                        <button
                          className="button muted-button"
                          onClick={() =>
                            navigate(`/admin/editfaculty/${teacherId}`)
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="button muted-button"
                          onClick={() => removeFaculty(email)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminViewFaculty;
