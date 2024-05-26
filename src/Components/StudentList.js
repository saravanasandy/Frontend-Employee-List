import React from "react";
import EditStudent from "./EditStudent";
import { useParams } from "react-router-dom";

const StudentList = ({ studentDetails, studentDelete }) => {
  const params = useParams();

  // const EditId = studentDetails.find((find) => {
  //   return find.id === params;
  // });

  // console.log(EditId);
  return (
    <>
      {/* tables  */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Students details</div>
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
                      <th scope="col">ADMISSION DATE</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentDetails &&
                      studentDetails.map((value, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.phone}</td>
                            <td>{value.enroll}</td>
                            <td>{value.admissionDate.slice(0, 10)}</td>
                            <td>
                              <span
                                className="pe-3 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal2"
                              >
                                <i class="bi bi-pencil-square"></i>
                              </span>
                              <EditStudent id={value._id} />
                              <span
                                className="pe-3 text-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal3"
                              >
                                <i class="bi bi-trash"></i>
                              </span>
                              {/* <!-- Modal --> */}
                              <div class="modal fade" id="exampleModal3">
                                <div class="modal-dialog modal-md mt-5">
                                  <div class="modal-content p-4">
                                    <div className="container-fluid">
                                      <div class="row">
                                        <div className="col-lg-12">
                                          <div className="mb-3 form-control">
                                            <h4>
                                              Are you Sure to delete this
                                              Student ?
                                            </h4>
                                          </div>

                                          <div className="mb-3 form-control d-flex gap-4">
                                            <button
                                              type="submit"
                                              class="btn btn-success form-control"
                                              value="submit"
                                              onClick={() =>
                                                studentDelete(value._id)
                                              }
                                            >
                                              Yes
                                            </button>

                                            <button
                                              type="button"
                                              class="btn btn-danger form-control"
                                              data-bs-dismiss="modal"
                                            >
                                              No
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentList;
