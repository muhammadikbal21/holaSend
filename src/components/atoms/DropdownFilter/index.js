import React, {useState} from "react";
import {Button, ButtonGroup, Form, Modal, Toast, ToggleButton} from "react-bootstrap";
import { Gap } from "..";
import {Col, Row} from "reactstrap";

const DropdownFilterTask = ({destinations, users, dataPriority, dataStatus, onResult, filter, setFilter}) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showBefore, setShowBefore] = useState(filter.before !== null);
    const [showAfter, setShowAfter] = useState(filter.after !== null);

    const toggleShowA = () => {
        if (showBefore) {
            setFilter({...filter, before: null})
        }
        setShowBefore(!showBefore)
    };
    const toggleShowB = () => {
        if (showAfter) {
            setFilter({...filter, after: null})
        }
        setShowAfter(!showAfter)
    };

    const toggleStyle = {
        flexWrap: 'wrap'
    }

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
                    <ButtonGroup toggle style={toggleStyle}>
                        {destinations.map((item) => (
                            <ToggleButton
                                key={item.value}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={filter.destinationId}
                                checked={filter.destinationId === item.value}
                                onChange={() => setFilter({...filter, destinationId: item.value})}
                            >
                                {item.label}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <Gap height={15} />
                    <p style={{fontWeight: 'bold'}}>Username</p>
                    <ButtonGroup toggle style={toggleStyle}>
                        {users.map((item) => (
                            <ToggleButton
                                key={item.value}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={filter.requestById}
                                checked={filter.requestById === item.value}
                                onChange={() => setFilter({...filter, requestById: item.value})}
                            >
                                {item.label}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <Gap height={15} />
                    <p style={{fontWeight: 'bold'}}>Status</p>
                    <ButtonGroup toggle style={toggleStyle}>
                        {dataStatus.map((item) => (
                            <ToggleButton
                                key={item.value}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={filter.status}
                                checked={filter.status === item.value}
                                onChange={() => setFilter({...filter, status: item.value})}
                            >
                                {item.label}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <Gap height={15} />
                    <p style={{fontWeight: 'bold'}}>Priority</p>
                    <ButtonGroup toggle style={toggleStyle}>
                        {dataPriority.map((item) => (
                            <ToggleButton
                                key={item.value}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={filter.priority}
                                checked={filter.priority === item.value}
                                onChange={() => setFilter({...filter, priority: item.value})}
                            >
                                {item.label}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <Gap height={15} />
                    <p style={{fontWeight: 'bold'}}>Created Date</p>
                    <Row style={{display: 'flex'}}>
                        <Col xs={6}>
                            <Button variant="secondary" onClick={toggleShowB}>
                                After
                            </Button>
                            <Toast show={showAfter} onClose={toggleShowA}>
                                <Toast.Body>
                                    <input type="date" value={filter.after} onChange={(e) => {setFilter({...filter, after: e.target.value})}}/>
                                </Toast.Body>
                            </Toast>
                        </Col>
                        <Col xs={6}>
                            <Button variant="secondary" onClick={toggleShowA}>
                                Before
                            </Button>
                            <Toast show={showBefore} onClose={toggleShowA}>
                                <Toast.Body>
                                    <input type="date" value={filter.before} onChange={(e) => {setFilter({...filter, before: e.target.value})}}/>
                                </Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
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