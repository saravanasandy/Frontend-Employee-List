import React, { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

const EditStudent = ({ id }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      enroll: "",
      admissionDate: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please Enter name";
      }
      if (values.email === "") {
        errors.email = "Please Enter email";
      }
      if (values.phone === "") {
        errors.phone = "Please Enter phone";
      }
      return errors;
      // return {} means success.
    },
    onSubmit: async (values) => {
      // console.log(values);
      let user = await axios.put(
        `https://backend-employee-list.onrender.com/api/students/${id}`,
        values
      );
      window.location.reload();
    },
  });

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://backend-employee-list.onrender.com/api/students/${id}`
      );
      formik.setValues({
        name: user.data.name,
        email: user.data.email,
        phone: user.data.phone,
        enroll: user.data.enroll,
        admissionDate: user.data.admissionDate,
      });
    } catch (error) {}
  };
  return (
    <>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal2">
        <div className="modal-dialog modal-md mt-5">
          <div className="modal-content p-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={formik.handleSubmit}>
                    <h4 className="text-center">Edit Data</h4>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="phone"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="phone"
                        className="form-control"
                        id="enroll"
                        name="enroll"
                        placeholder="Enroll"
                        value={formik.values.enroll}
                        onChange={formik.handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="Date"
                        className="form-control"
                        id="date"
                        name="admissionDate"
                        placeholder="Date of Admission"
                        value={formik.values.admissionDate}
                        onChange={formik.handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn btn-success form-control"
                        value="submit"
                        disabled={!formik.isValid}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="mb-3">
                      <button
                        type="button"
                        className="btn btn-danger form-control"
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
    </>
  );
};

export default EditStudent;
