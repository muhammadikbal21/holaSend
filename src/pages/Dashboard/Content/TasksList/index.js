import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import {
    DropdownFilterTask, ExportModal,
    Loading,
    ModalView,
} from "../../../../components/atoms";
import { getAllDestinationsFilterAction } from "../../../../configs/actions/destinations/destinationsAction";
import {
    deleteByIdTaskAction,
    getAllTaskAction,
} from "../../../../configs/actions/task/taskAction";
import { getAllUserFilterAction } from "../../../../configs/actions/user/userAction";
import {PaginationButton} from "../../../../components/atoms/Button";
import {ButtonGroup} from "reactstrap";

const TasksList = (props) => {

    const [tasks, setTasks] = useState([]);
    const [destinations] = useState([
        { value: null, label: 'All'}
    ])
    const [users] = useState([
        { value: null, label: 'All'}
    ])
    const [error, setError] = useState(null)
    const [dataPriority] = useState([
        { value: null, label: "ALL" },
        { value: "HIGH", label: "HIGH" },
        { value: "MEDIUM", label: "MEDIUM" },
        { value: "LOW", label: "LOW" },
    ])
    const [dataStatus] = useState([
        { value: null, label: "ALL" },
        { value: "WAITING", label: "WAITING" },
        { value: "ASSIGNED", label: "ASSIGNED" },
        { value: "PICKUP", label: "PICKUP" },
        { value: "DELIVERED", label: "DELIVERED" },
    ])
    const [filter, setFilter] = useState({
        status: null,
        destinationId: null,
        requestById: null,
        priority: null,
        before: null,
        after: null
    })
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)

    const totalPage = Math.ceil(props.pageInfo.total / props.pageInfo.size)

    useEffect(() => {
        onReload()
    }, [page, size])

    useEffect(() => {
        onReload();
    }, []);

    useEffect(() => {
        if (props.listDestinations) {
            if (destinations.length === 1) {
                props.listDestinations.map(
                    destination => {
                        destinations.push({
                            value: destination.id,
                            label: destination.name
                        })
                    }
                )
            }
        }
        if (props.listUser) {
            if (users.length === 1) {
                props.listUser.map(
                    user => users.push({
                        value: user.id,
                        label: user.username
                    })
                )
            }
        }
        if (props.listTask) {
            setTasks(props.listTask);
        }
    }, [props.listDestinations, props.listUser, props.listTask]);

    useEffect(() => {
        if (props.error) {
            setError(props.error)
        }
    }, [props.error]);

    useEffect(() => {
        if (props.isDelete) {
            onReload();
        }
    }, [props.isDelete]);

    const onReload = () => {
        props.dispatchGetAllTaskAction({page: page, size: size}, filter);
        props.dispatchGetAllDestinationsFilterAction();
        props.dispatchGetAllUserFilterAction()
    };

    const handleLimit = (limit) => {
        setSize(limit)
        setPage(0)
    }

    const onSetFilter = () => {
        setPage(0)
        onReload()
    }

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
                                Tasks Report
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
                                                margin: "0.5rem",
                                            }}
                                        >
                                            <ButtonGroup>
                                                <ExportModal />
                                                <DropdownFilterTask
                                                    destinations={destinations}
                                                    users={users}
                                                    dataPriority={dataPriority}
                                                    dataStatus={dataStatus}
                                                    onResult={onSetFilter}
                                                    filter={filter}
                                                    setFilter={setFilter}
                                                    task={true}
                                                />
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card-body table-responsive p-0"
                                    style={{ height: "52vh" }}
                                >
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
                                                    <td>{e.createDate.substring(0, 19).replace("T", " ")}</td>
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
                    <PaginationButton
                        currentPage={page}
                        setPage={setPage}
                        totalPage={totalPage}
                        handleLimit={handleLimit}
                        size={size}
                    />
                </div>
            </div>
        </div>
        :
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container" style={{ marginTop: "50px" }}>
                    <Loading />
                </div>
            </div>
        </div>
    );
};

// reducer
const mapStateToProps = (state) => {
    return {
        listTask: state.getAllTaskReducer.data,
        isLoading: state.getAllTaskReducer.isLoading,
        error: state.getAllTaskReducer.error,
        pageInfo: state.getAllTaskReducer.pagination,
        isDelete: state.deleteByIdTaskReducer.data,
        listDestinations: state.getAllDestinationsFilterReducer.data,
        listUser: state.getAllUserFilterReducer.data,
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
