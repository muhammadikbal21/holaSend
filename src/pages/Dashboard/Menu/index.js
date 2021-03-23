import React, { useState } from "react";
import swal from "sweetalert"
import { Link } from "react-router-dom"

const Menu = () => {
  const [role, setRole] = useState(localStorage.getItem("role"))

  const handleLogout = (e) => {
    swal({
      title: "Logout?",
      text: "Are you sure want to logout now?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((logout) => {
        if (logout) {
          localStorage.removeItem("token")
          localStorage.removeItem("role")
          window.location.href = "/"
        }
      });
  }

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ backgroundColor: '#152C5B' }}>
      {/* Brand Logo */}
      <div className="brand-link">
        <img
          src="/dist/img/newotw.png"
          alt="hola!"
          className="brand-image img-circle elevation-3"
        />
        <span style={{ color: '#536DFE', fontWeight: 'bold' }}>&nbsp; hola<span className="brand-text font-weight-light" style={{ color: 'white', fontWeight: 'bold' }}>Send!</span></span>
      </div>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <a href="#" className="d-block">
              &nbsp; ADMIN
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
            <li className="nav-item has-treeview" style={{ marginBottom: '3px' }}>
              <a href="#" className="nav-link active" style={{ backgroundColor: '#536DFE' }}>
                <i className="nav-icon fas fa-edit" />
                <p>
                  Tasks
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/dashboard/create-task">
                    <a href="#" className="nav-link">
                      <i className="fas fa-plus nav-icon" />
                      <p>New Task</p>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/tasks-list">
                    <a href="#" className="nav-link">
                      <i className="fas fa-list nav-icon" />
                      <p>Tasks Lists</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview" style={{ marginBottom: '3px' }}>
              <a href="#" className="nav-link active" style={{ backgroundColor: '#536DFE' }}>
                <i className="nav-icon fas fa-map-marked-alt" />
                <p>
                  Destinations
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/dashboard/create-destinations">
                    <a href="#" className="nav-link">
                      <i className="fas fa-plus nav-icon" />
                      <p>New Destination</p>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fas fa-list nav-icon" />
                    <p>Destination Lists</p>
                  </a>
                </li>
              </ul>
            </li>
            {
              role == "ADMIN" ?
                <>
                  <li className="nav-item has-treeview" style={{ marginBottom: '3px' }}>
                    <a href="#" className="nav-link active" style={{ backgroundColor: '#536DFE' }}>
                      <i className="nav-icon fas fa-user" />
                      <p>
                        Users
                </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="/dashboard/user-managements">
                          <a href="#" className="nav-link">
                            <i className="fas fa-users-cog nav-icon" />
                            <p>User Managements</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-treeview" style={{ marginBottom: '3px' }}>
                    <a href="#" className="nav-link active" style={{ backgroundColor: '#536DFE' }}>
                      <i className="nav-icon fas fa-copy" />
                      <p>
                        Reports
                </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/layout/top-nav.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Top Navigation</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/top-nav-sidebar.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Top Navigation + Sidebar</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/layout/boxed.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Boxed</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/fixed-sidebar.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Fixed Sidebar</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/layout/fixed-topnav.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Fixed Navbar</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/layout/fixed-footer.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Fixed Footer</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/collapsed-sidebar.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Collapsed Sidebar</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                </> : <></>
            }
            <li className="nav-item has-treeview" style={{ marginBottom: '3px' }} onClick={handleLogout}>
              <a href="#" className="nav-link active" style={{ backgroundColor: '#536DFE' }}>
                <i className="nav-icon fa fa-exclamation-triangle" />
                <p>
                  Logout
                </p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Menu;
