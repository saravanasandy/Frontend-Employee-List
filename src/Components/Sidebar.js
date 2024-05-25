import React from "react";

const Sidebar = () => {
  return (
    <>
      {/* sidebar */}
      <div>
        <div
          className="offcanvas offcanvas-start bg-dark side-color text-white sidebar-nav"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-body p-0">
            <nav className="navbar-dark d-flex justify-content-center align-items-center">
              <div className="side-logo"></div>
              <ul className="navbar-nav">
                <li>
                  <div className=" small fw-bold text-uppercase px-3 pt-4">
                    Yellow Owl
                  </div>
                </li>
                <li>
                  <a href="#" className="nav-link px-3 active">
                    <span className="me-2">
                      <i class="bi bi-speedometer2"></i>
                    </span>
                    <span>Admin</span>
                  </a>
                </li>
                {/* <li className="my-4">
                  <hr className="bg-light" />
                </li>
                <li>
                  <div className=" small fw-bold text-uppercase px-3">
                    Staff Details
                  </div>
                </li>
                <li>
                  <a
                    class="nav-link px-3 sidebar-link"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="me-2">
                      <i class="bi bi-bookmark-dash"></i>
                    </span>
                    <span>Staffs</span>
                    <span className="right-icon ms-auto">
                      <i class="bi bi-chevron-down"></i>
                    </span>
                  </a>
                  <div class="collapse" id="collapseExample">
                    <div class="">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <a href="#" className="nav-link">
                            <span className="me-2">
                              <i class="bi bi-bookmark-dash"></i>
                            </span>
                            <span>Staff-1</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
