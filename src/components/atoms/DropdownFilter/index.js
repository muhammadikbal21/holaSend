import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Gap } from "..";

const DropdownFilterTask = ({destinations, users, dataPriority, dataStatus, onResult}) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <p style={{fontWeight: 'bold'}}>Requested By</p>
                    {users.map((item, key) => (
                        <Form.Check type="checkbox" inline label={item.role} key={key} value={item.role} /> 
                    ))}
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
                    <Button variant="primary" onClick={onResult}>
                        Result
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DropdownFilterTask;