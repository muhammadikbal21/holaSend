import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import { ModalView } from "../../../../components/atoms";
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
                                        List of Table
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
                                    <table className="table text-nowrap table-bordered table-head-fixed">
                                        <thead >
                                            <tr>
                                                <th>Created Date</th>
                                                <th>Destination</th>
                                                <th>Status</th>
                                                <th>Priority</th>
                                                <th>Notes</th>
                                                <th>Requested By</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { tasks.map((e) => (
                                                <tr>
                                                    <td>{e.createDate}</td>
                                                    <td>{e.destination.name}</td>
                                                    <td>{e.status}</td>
                                                    <td>{e.priority}</td>
                                                    <td>{e.notes}</td>
                                                    <td>{e.requestBy ? e.requestBy.username : ""}</td>
                                                    <td>
                                                        <Button
                                                            className="fas fa-trash-alt btn-danger"
                                                            onClick={() =>
                                                                onDelete(e.id)
                                                            }
                                                        />
                                                        <span style={{margin: '3px'}} />
                                                        <ModalView 
                                                        className="fas fa-eye btn-info" 
                                                        data={e} 
                                                        title="Detail Task"
                                                        p1="Requested"
                                                        p2="Destination"
                                                        p3="Address"
                                                        p4="Pick Up Time"
                                                        p5="Delivered Time"
                                                        p6="Request By"
                                                        p7="Courier"
                                                        p8="Return Time"
                                                        p9="Status"
                                                        p10="Priority"
                                                        p11="Notes"
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
