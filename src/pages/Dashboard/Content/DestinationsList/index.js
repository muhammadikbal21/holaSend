import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { deleteByIdDestinationsAction, getAllDestinationsAction } from '../../../../configs/actions/destinations/destinationsAction';

const DestinationsList = (props) => {

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        onReload();
    }, []);

    useEffect(() => {
        if (props.listDestinations) {
            setDestinations(props.listDestinations)
        }
    }, [props.listDestinations]);

    useEffect(() => {
        if (props.isDelete) {
            onReload();
        }
    }, [props.isDelete]);

    const onReload = () => {
        props.dispatchGetAllDestinationsAction()
    };

    const onDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Destinations!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                props.dispatchDeleteByIdDestinationsAction(id);
                swal("Poof! Your Destinations has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your Destinations is safe!");
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
                                Destinations List
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
                                                    // width: '150%',
                                                    margin: "0.5rem",
                                                }}
                                            >
                                                
                                                {/* <DropdownFilterTask 
                                                destinations={destinations} 
                                                users={users} 
                                                dataPriority={dataPriority} 
                                                dataStatus={dataStatus}
                                                onResult={onSetFilter}
                                                filter={filter}
                                                setFilter={setFilter}
                                            /> */}
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div
                                        className="card-body table-responsive p-0"
                                        style={{ height: "60vh" }}
                                        >
                                        <table className="table text-nowrap table-bordered table-head-fixed">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Address</th>
                                                    <th>Longitude</th>
                                                    <th>Latitude</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {destinations.map((e) => (
                                                <tr>
                                                    <td>{e.name}</td>
                                                    <td>
                                                        {e.address}
                                                    </td>
                                                    <td>{e.lon}</td>
                                                    <td>{e.lat}</td>
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
    )
}

// reducer
const mapStateToProps = (state) => {
    return {
        listDestinations: state.getAllDestinationsReducer.data,
        isDelete: state.deleteByIdDestinationsReducer.data,
        // listTask: state.getAllTaskReducer.data,
        // pageInfo: state.getAllTaskReducer.pagination,
        // listUser: state.getAllUserFilterReducer.data,
        // isLoading: state.getAllTaskReducer.isLoading,
        // error: state.getAllTaskReducer.error
    };
};

// action
const mapDispatchToProps = {
    dispatchGetAllDestinationsAction: getAllDestinationsAction,
    dispatchDeleteByIdDestinationsAction: deleteByIdDestinationsAction,
    // dispatchGetAllTaskAction: getAllTaskAction,
    // dispatchGetAllUserFilterAction: getAllUserFilterAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DestinationsList);