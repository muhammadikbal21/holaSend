import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  DropdownList,
  Gap,
  TextArea,
} from "../../../../components/atoms";
import { getAllDestinationsAction } from "../../../../configs/actions/destinations/destinationsAction";

const CreateTask = (props) => {
  const [destinations, setDestinations] = useState([]);
  const [priority, setPriority] = useState("");
  const [destinationId, setDestinationId] = useState("");
  const [destinationName, setDestinationName] = useState([]);
  const [notes, setNotes] = useState("");

  const [dropDestination, setDropDestination] = useState([]);

  const onReload = () => {
    props.dispatchGetAllDestinationsAction();
  };

  useEffect(() => {
    onReload();
  }, []);

  useEffect(() => {
    if (destinations) {
      setDestinations(props.listDestinations);

      if (destinationName.length !== destinations.length) {
        onReload();
        for (var i = 0; i < destinations.length; i++) {
          var valueAndLabel = {
            value: destinations[i].id,
            label: destinations[i].name,
          };
          destinationName.push(valueAndLabel);
        }
      }
    }
  }, [destinations]);

  useEffect(() => {
    if (props.listDestinations) {
      setDestinations(props.listDestinations);
    }
  }, [props.listDestinations]);

  const handleDropdownDestinations = (destinations) => {
    setDestinationId(destinations);
  };

  const handleDropdownPriority = (priority) => {
    setPriority(priority);
  };

  const onSubmit = () => {
    const data = {
      destinations: destinations,
      priority: priority,
      notes: notes,
    };
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Task Form</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="card card-primary">
                <div
                  className="card-header"
                  style={{ backgroundColor: "#536DFE" }}
                >
                  <Gap height={10} />
                  <h3 className="card-title">Create Task</h3>
                </div>
                <div className="card-body">
                  <DropdownList
                    label="Destination"
                    data={destinationName}
                    value={destinationId}
                    placeholder="Select Destination"
                    handleDropdown={handleDropdownDestinations}
                  />

                  <Gap height={10} />
                  <DropdownList
                    label="Priority"
                    data={[
                      { value: "HIGH", label: "HIGH" },
                      { value: "MEDIUM", label: "MEDIUM" },
                      { value: "LOW", label: "LOW" },
                    ]}
                    value={priority}
                    placeholder="Select Priority"
                    handleDropdown={handleDropdownPriority}
                  />
                  <Gap height={10} />
                  <TextArea
                    label="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Notes"
                  />
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

// reducer
const mapStateToProps = (state) => {
  return {
    listDestinations: state.getAllDestinationsReducer.data,
    // data: state.loginReducer.data,
    // isLoading: state.loginReducer.isLoading,
    // error: state.loginReducer.error,
  };
};

// action
const mapDispatchToProps = {
  dispatchGetAllDestinationsAction: getAllDestinationsAction,
  // dispatchLoginAction: loginAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
