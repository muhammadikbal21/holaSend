import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getChartsTaskAction, getChartsUserAction } from "../../../configs/actions/charts/chartsAction";
import UserChart from "./Charts"

const DashboardCharts = (props) => {

  const [userCharts, setUserCharts] = useState({})
  const [taskCharts, setTaskCharts] = useState({})
  const [dataChartUser, setDataChartUser] = useState({
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      }
    ],
  })

  useEffect(() => {
    onReload()
  }, [])

  useEffect(() => {
    if (props.chartUser) {
      setUserCharts(props.chartUser)
      setDataChartUser({...dataChartUser, ['labels']: Object.keys(props.chartUser), ['datasets']: [{
        label: '# of Votes',
        data: Object.values(props.chartUser),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      }]   
      })
    }

    if (props.chartTask) {
      setTaskCharts(props.chartTask)
    }
  }, [props.chartUser, props.chartTask])

  const onReload = () => {
    props.dispatchGetChartsUserAction()
    props.dispatchGetChartsTaskAction()
  }

  console.log("ini chart user", userCharts);
  console.log("ini chart task", taskCharts);
  console.log("ini chart user data", dataChartUser);

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
                  <UserChart data={dataChartUser}/>
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

// reducer
const mapStateToProps = (state) => {
  return {
      chartUser: state.getChartsUserReducer.data,
      chartTask: state.getChartsTaskReducer.data,
      isLoading: state.getChartsUserReducer.isLoading || state.getChartsTaskReducer.isLoading,
      error: state.getChartsUserReducer.error || state.getChartsTaskReducer.error
  }
}

// action
const mapDispatchToProps = {
  dispatchGetChartsUserAction: getChartsUserAction,
  dispatchGetChartsTaskAction: getChartsTaskAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCharts);