import "./Faculty.css";
import React from "react";
import FacultyNavBar from "./FacultyNavBar";
import { NavLink } from "react-router-dom";

function Faculty() {
  return (
    <div>
      <FacultyNavBar />
      <div className="container-fluid">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "98vh", marginTop: -50 }}
        >
          <div className="col-10 p-5 shadow bg-white">
            <center>
              <span className="fw-light fs-1">Faculty Dashboard</span>
            </center>
            <table style={{ marginLeft: 300, marginTop: 20 }}>
              <tr>
                <td className="px-3">
                  <div
                    className="card text-bg-success mb-3"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-body">
                      <NavLink
                        to="/faculty/viewstudent"
                        style={{ textDecoration: "none" }}
                      >
                        <h5 className="card-title p-4 text-white">
                          Mark Attendance
                        </h5>{" "}
                      </NavLink>
                    </div>
                  </div>
                </td>

                <td className="px-3">
                  <div
                    className="card text-bg-success mb-3"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-body">
                      <NavLink
                        to="/faculty/ViewTimeTable"
                        style={{ textDecoration: "none" }}
                      >
                        <h5 className="card-title p-4 text-white">
                          View Attendance
                        </h5>{" "}
                      </NavLink>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
