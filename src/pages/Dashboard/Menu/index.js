import React from "react";

const Menu = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{backgroundColor: '#152C5B'}}>
      {/* Brand Logo */}
      <div className="brand-link">
        <img
          src="dist/img/newotw.png"
          alt="hola!"
          className="brand-image img-circle elevation-3"
        />
        <span style={{color: '#536DFE', fontWeight: 'bold'}}>&nbsp; hola<span className="brand-text font-weight-light" style={{color: 'white', fontWeight: 'bold'}}>Send!</span></span>
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
            <li className="nav-item has-treeview" style={{marginBottom: '10px'}}>
              <a href="#" className="nav-link active" style={{backgroundColor: '#536DFE'}}>
                <i className="nav-icon fas fa-edit" />
                <p>
                  Tasks
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./dashboard/create-task" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Create New Task</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Task Lists</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview" style={{marginBottom: '10px'}}>
              <a href="#" className="nav-link active" style={{backgroundColor: '#536DFE'}}>
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
            <li className="nav-item has-treeview" style={{marginBottom: '10px'}}>
              <a href="#" className="nav-link active" style={{backgroundColor: '#536DFE'}}>
                <i className="nav-icon fas fa-user" />
                <p>
                  Users
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/charts/chartjs.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>User Lists</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview" style={{marginBottom: '10px'}}>
              <a href="#" className="nav-link active" style={{backgroundColor: '#536DFE'}}>
                <i className="nav-icon fas fa-map-marked-alt" />
                <p>
                  Destinations
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/charts/chartjs.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>User Lists</p>
                  </a>
                </li>
              </ul>
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
