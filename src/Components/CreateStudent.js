import axios from "axios";
import React, { useState } from "react";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enroll, setEnroll] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, phone, enroll, admissionDate);
    try {
      const response = await axios.post(
        "https://backend-employee-list.onrender.com/api/students/",
        {
          name: name,
          email: email,
          phone: phone,
          enroll: enroll,
          admissionDate: admissionDate,
        }
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal">
        <div class="modal-dialog modal-md mt-5">
          <div class="modal-content p-4">
            <div className="container-fluid">
              <div class="row">
                <div className="col-lg-12">
                  <h4 className="text-center">Add Student Data</h4>
                  <div className="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="phone"
                      class="form-control"
                      id="phone"
                      name="phone"
                      placeholder="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="phone"
                      class="form-control"
                      id="enroll"
                      name="enroll"
                      placeholder="Enroll"
                      value={enroll}
                      onChange={(e) => setEnroll(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="Date"
                      class="form-control"
                      id="date"
                      name="admissionDate"
                      placeholder="Date of Admission"
                      value={admissionDate}
                      onChange={(e) => setAdmissionDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      class="btn btn-success form-control"
                      value="submit"
                      onClick={(e) => handleSubmit(e)}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
