import React from "react";

const NavPage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-color fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span
              className="navbar-toggler-icon"
              data-bs-target="#offcanvasExample"
            />
          </button>
          <a
            className="navbar-brand fw-bold text-uppercase me-auto ps-3"
            href="#"
          >
            Students
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavPage;
