import React from 'react'
import { Dropdown } from 'react-bootstrap';

const DropdownList = ({title, label}) => {
    return (
        <div className="input-wrapper">
            <p className="label">{label}</p>
            <Dropdown>
            <Dropdown.Toggle style={{background: '#536DFE'}} id="dropdown-basic">
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">KTP</Dropdown.Item>
                <Dropdown.Item href="#/action-2">SIM</Dropdown.Item>
                <Dropdown.Item href="#/action-3">PASSPORT</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}

export default DropdownList
