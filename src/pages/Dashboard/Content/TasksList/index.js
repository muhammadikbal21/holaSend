import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteByIdTaskAction, getAllTaskAction } from "../../../../configs/actions/task/taskAction";

const TasksList = (props) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        onReload();
    }, []);

    useEffect(() => {
        if (props.listTask) {
            setTasks(props.listTask);
        }
    }, [props.listTask]);

    useEffect(() => {
        if (props.isDelete) {
            onReload();
        }
    }, [props.isDelete])

    const onReload = () => {
        props.dispatchGetAllTaskAction();
    };

    const onDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              props.dispatchDeleteByIdTaskAction(id)
              swal("Poof! Your Task has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your Task is safe!");
            }
          });
    };

    //   useEffect(() => {
    // console.log("ini apa?", tasks);
    //   }, [tasks])

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid" style={{ marginTop: "50px" }}>
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1
                                className="m-0 text-dark"
                                style={{ paddingLeft: "35px" }}
                            >
                                Tasks List
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3
                                        className="card-title"
                                        style={{ margin: "1rem" }}
                                    >
                                        Fixed Header Table
                                    </h3>
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
                                    style={{ height: "60vh" }}
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
                                            {tasks.map((e) => (
                                                <tr>
                                                    <td>{e.destination.name}</td>
                                                    <td>{e.destination.address}</td>
                                                    <td>{e.pickUpTime}</td>
                                                    <td>{e.deliveredTime}</td>
                                                    <td>{e.status}</td>
                                                    <td>{e.priority}</td>
                                                    <td>{e.notes}</td>
                                                    <td>{e.createDate}</td>
                                                    <td>
                                                        <Button
                                                            className="fas fa-trash-alt btn-danger"
                                                            onClick={() =>
                                                                onDelete(e.id)
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
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

// reducer
const mapStateToProps = (state) => {
    return {
        listTask: state.getAllTaskReducer.data,
        isDelete: state.deleteByIdTaskReducer.data
        //   error: state.postTaskReducer.error
        // isLoading: state.loginReducer.isLoading,
    };
};

// action
const mapDispatchToProps = {
    dispatchGetAllTaskAction: getAllTaskAction,
    dispatchDeleteByIdTaskAction: deleteByIdTaskAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
