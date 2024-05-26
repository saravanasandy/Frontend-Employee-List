import React, { useEffect, useState } from "react";
import StudentList from "./StudentList";
import CreateStudent from "./CreateStudent";
import axios from "axios";

const url = "https://backend-employee-list.onrender.com/api/students/";

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let users = await axios.get(
      "https://backend-employee-list.onrender.com/api/students/",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(users);
    setUsers(users.data);
    setLoading(false);
  };

  console.log(users);

  let studentDetails = users.data;

  let studentDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://backend-employee-list.onrender.com/api/students/${id}`
      );
      // setUsers(users.filter((product) => product._id !== id));
      console.log(response.data);
      loadData();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchStudents();
  // }, []);

  // const fetchStudents = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(url);
  //     const studentDetails = await response.json();
  //     console.log(studentDetails);
  //     const data = studentDetails.data;
  //     setStudents(data);
  //   } catch (error) {
  //     console.log(error.studentDetails);
  //   }
  //   setIsLoading(false);
  // };

  // if (isLoading) {
  //   return (
  //     <main>
  //       <Loading />
  //     </main>
  //   );
  // }

  return (
    <>
      {loading ? (
        <div className="loader-parent">
          <span className="loader"></span>
        </div>
      ) : (
        <div>
          <main className="mt-5 pt-3 ps-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-between align-items-center ps-2">
                  Students
                  <div className="" id="navbarSupportedContent">
                    <form className="d-flex " role="search">
                      <div className="input-group my-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="search"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />

                        {/* create student button here */}

                        <button
                          type="button"
                          className="btn btn-primary add-color ms-3"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        ></button>
                        <CreateStudent />
                      </div>
                    </form>
                  </div>
                </div>
                <StudentList
                  studentDetails={studentDetails}
                  studentDelete={studentDelete}
                />
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default MainPage;
