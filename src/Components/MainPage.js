import axios from "axios";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [students, setStudents] = useState([]);

  const [loading, setloading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setloading(true);
    let students = await axios.get(
      "https://backend-employee-list.onrender.com/api/students/"
    );
    console.log(students);
    setStudents(students.data);
    setloading(false);
  };

  return (
    <>
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
                      {/* <span className="btn btn-primary" id="basic-addon2">
                      <i class="bi bi-search"></i>
                    </span> */}
                      {/* create student button here */}

                      <button
                        type="button"
                        class="btn btn-primary add-color ms-3"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      ></button>

                      {/* <!-- Modal --> */}
                      <div class="modal fade" id="exampleModal">
                        <div class="modal-dialog modal-md mt-5">
                          <div class="modal-content p-4">
                            <div className="container-fluid">
                              <div class="row">
                                <div className="col-lg-12">
                                  <form class="needs-validation" novalidate>
                                    <div className="mb-3">
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        placeholder="Name"
                                        required
                                      />
                                      <div class="valid-feedback">
                                        Looks Good
                                      </div>
                                      <div class="invalid-feedback">
                                        Please Enter a Name
                                      </div>
                                    </div>
                                    <div className="mb-3">
                                      <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        placeholder="Email"
                                        required
                                      />
                                      <div class="valid-feedback">
                                        Looks Good
                                      </div>
                                      <div class="invalid-feedback">
                                        Please Enter a Email
                                      </div>
                                    </div>
                                    <div className="mb-3">
                                      <input
                                        type="phone"
                                        class="form-control"
                                        id="phone"
                                        placeholder="phone"
                                        required
                                      />
                                      <div class="valid-feedback">
                                        Looks Good
                                      </div>
                                      <div class="invalid-feedback">
                                        Please Enter a Phone number
                                      </div>
                                    </div>
                                    <div className="mb-3">
                                      <input
                                        type="phone"
                                        class="form-control"
                                        id="enroll"
                                        placeholder="Enroll"
                                        required
                                      />
                                      <div class="valid-feedback">
                                        Looks Good
                                      </div>
                                      <div class="invalid-feedback">
                                        Please Enter a Enroll number
                                      </div>
                                    </div>
                                    <div className="mb-3">
                                      <input
                                        type="Date"
                                        class="form-control"
                                        id="date"
                                        placeholder="Date of Admission"
                                        required
                                      />
                                      <div class="valid-feedback">
                                        Looks Good
                                      </div>
                                      <div class="invalid-feedback">
                                        Please pick the date
                                      </div>
                                    </div>
                                    <div className="mb-3">
                                      <button
                                        type="submit"
                                        class="btn btn-success form-control"
                                        value="submit"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                    <div className="mb-3">
                                      <button
                                        type="button"
                                        class="btn btn-danger form-control"
                                        data-bs-dismiss="modal"
                                      >
                                        cancel
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">Data Tables</div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">S.NO</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">PHONE</th>
                            <th scope="col">ENROLL NUMBER</th>
                            <th scope="col">DATE OF ADMISSION</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto@gmail.com</td>
                            <td>7010585241</td>
                            <td>123456465564654</td>
                            <td>08-dec-24</td>
                            <td>
                              <span className="pe-3 text-primary">
                                <i class="bi bi-pencil-square"></i>
                              </span>
                              <span className="pe-3 text-danger">
                                <i class="bi bi-trash"></i>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Otto@gmail.com</td>
                            <td>7010585241</td>
                            <td>123456465564654</td>
                            <td>08-dec-24</td>
                            <td>
                              <span className="pe-3 text-primary">
                                <i class="bi bi-pencil-square"></i>
                              </span>
                              <span className="pe-3 text-danger">
                                <i class="bi bi-trash"></i>
                              </span>
                            </td>
                          </tr>
                          {/* <tr>
                          <th scope="row">3</th>
                          <td colspan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
