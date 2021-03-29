import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalView = ({
    data, 
    title, 
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11, ...rest}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} {...rest} />

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{p1} : {data.createDate.substring(0, 19).replace("T", " ")}</p>
                    <p>{p2} : {data.destination.name}</p>
                    <p>{p3} : {data.destination.address}</p>
                    <p>{p4} : {data.pickUpTime}</p>
                    <p>{p5} : {data.deliveredTime}</p>
                    <p>{p6} : {data.requestBy ? data.requestBy.username : ""}</p>
                    <p>{p7} : {data.courier ? data.courier.username : ""}</p>
                    <p>{p8} : {data.courierActivity ? data.courierActivity.returnTime : ""}</p>
                    <p>{p9} : {data.status}</p>
                    <p>{p10} : {data.priority}</p>
                    <p>{p11} : {data.notes}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalView;
