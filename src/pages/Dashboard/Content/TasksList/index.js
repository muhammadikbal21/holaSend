import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import {
    DropdownFilterTask,
    ModalView,
} from "../../../../components/atoms";
import { getAllDestinationsFilterAction } from "../../../../configs/actions/destinations/destinationsAction";
import {
    deleteByIdTaskAction,
    getAllTaskAction,
} from "../../../../configs/actions/task/taskAction";
import { getAllUserFilterAction } from "../../../../configs/actions/user/userAction";
import logo from "../../../../logo.svg"

const TasksList = (props) => {
    const [tasks, setTasks] = useState([]);
    const [destinations, setDestinations] = useState([])
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null)
    const [dataPriority, setDataPriority] = useState([
        { value: "HIGH", label: "HIGH" },
        { value: "MEDIUM", label: "MEDIUM" },
        { value: "LOW", label: "LOW" },
    ])
    const [dataStatus, setDataStatus] = useState([
        { value: "WAITING", label: "WAITING" },
        { value: "ASSIGNED", label: "ASSIGNED" },
        { value: "PICKUP", label: "PICKUP" },
        { value: "DELIVERED", label: "DELIVERED" },
    ])

    useEffect(() => {
        onReload();
    }, []);

    useEffect(() => {
        if (props.listDestinations) {
            setDestinations(props.listDestinations);
            console.log("ini use state destination", destinations);
        }
        if (props.listUser) {
            setUsers(props.listUser);
            console.log("ini use state user", users);
        }
        if (props.listTask) {
            setTasks(props.listTask);
        }
    }, [props.listDestinations, props.listUser, props.listTask]);

    useEffect(() => {
        if (props.error) {
            setError(props.error)
        }
        console.log(error);
    }, [props.error]);

    useEffect(() => {
        if (props.isDelete) {
            onReload();
        }
    }, [props.isDelete]);

    const onResult = () => {
        console.log();
    }

    const onReload = () => {
        props.dispatchGetAllTaskAction();
        props.dispatchGetAllDestinationsFilterAction();
        props.dispatchGetAllUserFilterAction()
    };

    const onDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                props.dispatchDeleteByIdTaskAction(id);
                swal("Poof! Your Task has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your Task is safe!");
            }
        });
    };

    return (
        !props.isLoading ?
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
                                    <div className="card-tools">
                                        <div
                                            className="input-group input-group-sm"
                                            style={{
                                                width: 150,
                                                margin: "0.5rem",
                                            }}
                                        >
                                            
                                            <DropdownFilterTask 
                                            destinations={destinations} 
                                            users={users} 
                                            dataPriority={dataPriority} 
                                            dataStatus={dataStatus} 
                                            onReload={onResult}
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card-body table-responsive p-0"
                                    style={{ height: "60vh" }}
                                >
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {console.log(error)}
                                    </div>
                                    <table className="table text-nowrap table-bordered table-head-fixed">
                                        <thead>
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
                                            {tasks.map((e) => (
                                                <tr>
                                                    <td>{e.createDate}</td>
                                                    <td>
                                                        {e.destination.name}
                                                    </td>
                                                    <td>{e.status}</td>
                                                    <td>{e.priority}</td>
                                                    <td>{e.notes}</td>
                                                    <td>
                                                        {e.requestBy
                                                            ? e.requestBy
                                                                  .username
                                                            : ""}
                                                    </td>
                                                    <td>
                                                        <Button
                                                            className="fas fa-trash-alt btn-danger"
                                                            onClick={() =>
                                                                onDelete(e.id)
                                                            }
                                                        />
                                                        <span
                                                            style={{
                                                                margin: "3px",
                                                            }}
                                                        />
                                                        <ModalView
                                                            className="fas fa-eye btn-info"
                                                            data={e}
                                                            title="Detail Task"
                                                            p1="Created Date"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <Container className="mt-5">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {/* <Spinner color="primary" style={{width: '3rem', height: '20rem'}} /> */}
                <img src={logo} className="App-logo" alt="logo" />
            </div>        
        </Container>
    );
};

// reducer
const mapStateToProps = (state) => {
    return {
        listTask: state.getAllTaskReducer.data,
        isDelete: state.deleteByIdTaskReducer.data,
        listDestinations: state.getAllDestinationsFilterReducer.data,
        listUser: state.getAllUserFilterReducer.data,
        isLoading: state.getAllTaskReducer.isLoading,
        error: state.getAllTaskReducer.error
    };
};

// action
const mapDispatchToProps = {
    dispatchGetAllTaskAction: getAllTaskAction,
    dispatchDeleteByIdTaskAction: deleteByIdTaskAction,
    dispatchGetAllDestinationsFilterAction: getAllDestinationsFilterAction,
    dispatchGetAllUserFilterAction: getAllUserFilterAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
