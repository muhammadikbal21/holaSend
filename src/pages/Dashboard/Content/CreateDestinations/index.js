import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import {
  Button,
  Gap,
  Input,
  MapView,
  WrappedMap,
} from "../../../../components/atoms";
import { postDestinationsAction } from "../../../../configs/actions/destinations/destinationsAction";
// import Index from "../../../../components/atoms/MapView";

const CreateDestinations = (props) => {
  const [destination, setDestination] = useState("");
  const [address, setAddress] = useState("");
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);

  const [destinationError, setDestinationError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    // jika sukses
    if (props.data) {
      swal("Create Destinations Success!", "", "success");
      setDestination("")
      setAddress("")
      setLon("")
      setLat("")
      // history.push('./dashboard')
    }

     // jika error
     if (props.error) {
      swal("Create Destinations Error!", "", "error");
    }
  }, [props.data, props.error]);

  useEffect(() => {
    setDestinationError("")
    setAddressError("")
    setLocationError("")
  }, [destination, address, lon, lat])

  const onSubmit = () => {
    const isValid = validate();
    if (isValid) {
      const data = {
        name: destination,
        address: address,
        lon: parseFloat(lon),
        lat: parseFloat(lat)
      }
      console.log(data);

      props.dispatchPostDestinationsAction(data)
    }
  };

  const onLocate = (lat, lon) => {
    setLat(lat)
    setLon(lon)
  }

  const onAddressInput = (address) => {
    console.log(address)
    setAddress(address)
    setLat("")
    setLon("")
  }

  const validate = () => {
    let destinationsError = "";
    let addressError = "";
    let locationError = "";

    if (!destination) {
      destinationsError = "Destination must not blank!";
    }

    if (!address) {
      addressError = "Address must not blank!";
    }
    
    if (!lon && !lat) {
      locationError = "Location must not blank!";
    }

    if (destinationsError || addressError || locationError) {
      setDestinationError(destinationsError);
      setAddressError(addressError);
      setLocationError(locationError)
      swal("Create Destinations Error!", "", "error");
      return false;
    }

    return true;
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Destination Form</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="card card-primary">
                <div
                  className="card-header"
                  style={{ backgroundColor: "#536DFE", padding: "1rem 3rem" }}
                >
                  <Gap height={10} />
                  <h3 className="card-title">Create Destinations</h3>
                </div>
                <div className="card-body" style={{ padding: "1rem 3rem" }}>
                  <Input
                    label="Name"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Name"
                  />
                  <Gap height={10} />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {destinationError}
                  </div>
                  <Gap height={15} />
                  <Input
                    label="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                  />
                  <Gap height={10} />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {addressError}
                  </div>
                  <Gap height={15} />
                  <MapView
                      label="Pick Locations"
                      onLocate={onLocate}
                      onAddressInput={onAddressInput}
                  />
                  <Gap height={10} />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {locationError}
                  </div>
                  <Gap height={15} />
                  <Input
                     type="number" step="any"
                    value={lon}
                    onChange={(e) => setLon(e.target.value)}
                    placeholder="Longitude" hidden
                  />
                  <Gap height={15} />
                  <Input
                     type="number" step="any"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    placeholder="Latitude" hidden
                  />
                  <Gap height={15} />
                </div>
                <div className="card-footer" style={{ padding: "1rem 3rem" }}>
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
    data: state.postDestinationsReducer.data,
    // listDestinations: state.getAllDestinationsReducer.data,
    // error: state.postTaskReducer.error
    // data: state.loginReducer.data,
    // isLoading: state.loginReducer.isLoading,
  };
};

// action
const mapDispatchToProps = {
  dispatchPostDestinationsAction: postDestinationsAction,
  // dispatchGetAllDestinationsAction: getAllDestinationsAction,
};

export default connect(mapStateToProps, mapDispatchToProps) (CreateDestinations);
