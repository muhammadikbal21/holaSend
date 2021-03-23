import React from "react";
import UserChart from "./UserChart"

const Content = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container" style={{ marginTop: '50px' }}>
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Hello Admin!</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-sm-12">
              <div class="card">
                <div class="card-header"> Users </div>
                <div class="card-body">
                  <UserChart />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div class="card">
                <div class="card-header"> Tasks </div>
                <div class="card-body">
                  <UserChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
