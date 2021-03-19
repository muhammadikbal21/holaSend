import React from "react";

const TasksList = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid" style={{ marginTop: "50px" }}>
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark" style={{paddingLeft: '35px'}}>Tasks List</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title" style={{margin: '1rem'}}>Fixed Header Table</h3>
                  {/* Search Features */}
                  {/* <div className="card-tools">
                    <div
                      className="input-group input-group-sm"
                      style={{ width: 150, margin: '0.5rem' }}
                    >
                      <input
                        type="text"
                        name="table_search"
                        className="form-control float-right"
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* /.card-header */}
                <div
                  className="card-body table-responsive p-0"
                  style={{ height: '60vh' }}
                >
                  <table className="table table-head-fixed text-nowrap">
                    <thead>
                      <tr>
                        <th>Destination</th>
                        <th>Address</th>
                        <th>Pick Up Time</th>
                        <th>Delivered Time</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Notes</th>
                        <th>Create At</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>183</td>
                        <td>John Doe</td>
                        <td>11-7-2014</td>
                        <td>11-7-2014</td>
                        <td>11-7-2014</td>
                        <td>11-7-2014</td>
                        <td>11-7-2014</td>
                        <td>11-7-2014</td>
                        <td>11-7-2014</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksList;
