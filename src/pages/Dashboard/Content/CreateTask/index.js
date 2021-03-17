import React, { useState } from "react";
import { Button, DropdownList, Gap, TextArea } from "../../../../components/atoms";

const CreateTask = () => {

  const [destination, setDestination] = useState('')
  const [priority, setPriority] = useState('')
  const [notes, setNotes] = useState('')

  const handleDropdownDestination = (destination) => {
    setDestination(destination)
  }

  const handleDropdownPriority = (priority) => {
    setPriority(priority)
  }

  const onSubmit = () => {
    console.log(destination);
    console.log(priority);
    console.log(notes);
  }

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container" style={{marginTop: '50px'}}>
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Task Form</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="card card-primary">
                <div className="card-header" style={{backgroundColor: '#536DFE'}} >
                  <Gap height={10} />
                  <h3 className="card-title">Create Task</h3>
                </div>
                <div className="card-body">
                <DropdownList
                    label="Destination"
                    data={[
                        {value: 1, label: "Enigma"},
                        {value: 2, label: "Mandiri"},
                        {value: 3, label: "BAF"}
                    ]}
                    value={destination}
                    placeholder="Select Destination"
                    handleDropdown={handleDropdownDestination}
                />
                <Gap height={10} />
                <DropdownList
                    label="Priority"
                    data={[
                        {value: 1, label: "HIGH"},
                        {value: 2, label: "MEDIUM"},
                        {value: 3, label: "LOW"}
                    ]}
                    value={priority}
                    placeholder="Select Priority"
                    handleDropdown={handleDropdownPriority}
                />
                <Gap height={10} />
                <TextArea label="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes" />
                </div>
                <div className="card-footer">
                  <Button title="Submit" onClick={() => onSubmit()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
