import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { Gap } from "..";
import { getAllDestinationsAction } from "../../../configs/actions/destinations/destinationsAction";

const DropdownFilterTask = (props) => {
    const [show, setShow] = useState(false);
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
    const [destinations, setDestinations] = useState([])
    // const [destinationsData] = useState([]);

    useEffect(() => {
        onReload()
        console.log("ini reducer", props.listDestinations);
    }, [])

    useEffect(() => {
        if (props.listDestinations) {
          setDestinations(props.listDestinations);
          console.log("ini use state", destinations);
        }
    }, [props.listDestinations]);

    // useEffect(() => {
    //     if (destinations) {
    //       if (destinationsData.length !== destinations.length) {
    //         onReload();
    //         for (var i = 0; i < destinations.length; i++) {
    //           var valueAndLabel = {
    //             value: destinations[i].id,
    //             label: destinations[i].name,
    //           };
    //           destinationsData.push(valueAndLabel);
    //         }
    //       }
    //     }
    //     console.log("ini destinations", destinations);
    //   }, [destinations]);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onReload = () => {
        props.dispatchGetAllDestinationsAction();
      };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Filter By
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <p style={{fontWeight: 'bold'}}>before after</p> */}
                    <p style={{fontWeight: 'bold'}}>Destination</p>
                    {destinations.map((item, key) => (
                        <Form.Check type="checkbox" inline label={item.name} key={key} value={item.name} />
                    ))}
                    <Gap height={10} />
                    <p style={{fontWeight: 'bold'}}>Status</p>
                    {dataStatus.map((item, key) => (
                        <Form.Check type="checkbox" inline label={item.value} key={key} value={item.value} />
                    ))}
                    <Gap height={10} />
                    <p style={{fontWeight: 'bold'}}>req by</p>
                    <Gap height={10} />
                    <p style={{fontWeight: 'bold'}}>Priority</p>
                    {dataPriority.map((item, key) => (
                        <Form.Check type="checkbox" inline label={item.value} key={key} value={item.value} />
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Result
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

// reducer
const mapStateToProps = (state) => {
    return {
      listDestinations: state.getAllDestinationsReducer.data,
    //   data: state.postTaskReducer.data,
    //   error: state.postTaskReducer.error
      // data: state.loginReducer.data,
      // isLoading: state.loginReducer.isLoading,
    };
};

// action
const mapDispatchToProps = {
    dispatchGetAllDestinationsAction: getAllDestinationsAction,
    // dispatchPostTaskAction: postTaskAction,
};

export default connect(mapStateToProps, mapDispatchToProps) (DropdownFilterTask);