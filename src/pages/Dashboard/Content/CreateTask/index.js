import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import swal from "sweetalert";
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
  const [destinationsData] = useState([]);
  const [notes, setNotes] = useState("");

  const [destinationsError, setDestinationsError] = useState("");
  const [priorityError, setPriorityError] = useState("");
  const [notesError, setNotesError] = useState("");

  const history = useHistory();

  //1
  useEffect(() => {
    onReload();
  }, []);

  //2
  useEffect(() => {
    if (props.listDestinations) {
      setDestinations(props.listDestinations);
    }
  }, [props.listDestinations]);

  //3
  useEffect(() => {
    if (destinations) {
      if (destinationsData.length !== destinations.length) {
        onReload();
        for (var i = 0; i < destinations.length; i++) {
          var valueAndLabel = {
            value: destinations[i].id,
            label: destinations[i].name,
          };
          destinationsData.push(valueAndLabel);
        }
      }
    }
  }, [destinations]);

  const onReload = () => {
    props.dispatchGetAllDestinationsAction();
  };

  const onSubmit = () => {
    const isValid = validate();
      if (isValid) {
        const data = {
          destinations: destinationId,
          priority: priority,
          notes: notes,
        };
        console.log("datanya: ", data);
      }
  };

  const validate = () => {
    let destinationsError = "";
    let priorityError = "";
    let notesError = "";

    if (!destinationId) {
      destinationsError = "Destination must not blank!";
    }

    if (!priority) {
      priorityError = "Priority must not blank!";
    }

    if (!notes) {
      notesError = "Notes must not blank!";
    }

    if (destinationsError || priorityError || notesError) {
      setDestinationsError(destinationsError);
      setPriorityError(priorityError);
      setNotesError(notesError);
      swal("Registration Error!", "", "error");
      return false;
    }

    return true;
  };

  const handleDropdownDestinations = (destinations) => {
    setDestinationId(destinations);
  };

  const handleDropdownPriority = (priority) => {
    setPriority(priority);
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
                    data={destinationsData}
                    value={destinationId}
                    placeholder="Select Destination"
                    handleDropdown={handleDropdownDestinations}
                  />
                  <Gap height={10} />
                  <div style={{fontSize: 12, color: "red"}}>{destinationsError}</div>
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
                  <div style={{fontSize: 12, color: "red"}}>{priorityError}</div>
                  <Gap height={10} />
                  <TextArea
                    label="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Notes"
                  />
                  {/* <Gap height={10} /> */}
                  <div style={{fontSize: 12, color: "red"}}>{notesError}</div>
                  {/* <Gap height={10} /> */}
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
