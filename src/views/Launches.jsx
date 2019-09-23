import React, { Component } from 'react';
import './Launches.scss';
import LaunchesData from '../components/LaunchesData';

export default class Launches extends Component {
  state = {
    query: `
    query LaunchesQuery {
      past {
        flight_number
        mission_name
        launch_date_local
        launch_success
      }
    }
    `,
    name: 'past',
  };

  displayTag = (isSuccess) => {
    if (isSuccess) {
      return <div className="launch-status status-success">Successful</div>;
    }
    return <div className="launch-status status-fail">Fail</div>;
  };

  render() {
    const { query, name } = this.state;
    const launchesArray = LaunchesData(query, name);
    const latestLaunch = launchesArray[0];
    return (
      <main>
        <section className="launch-latest">
          <div className="row">
            <h3>#{latestLaunch.flight_number}</h3>
            <img src={latestLaunch.links.mission_patch_small} alt="" />
            {this.displayTag(latestLaunch.launch_success)}
          </div>
        </section>
        <section className="launch-list">list</section>
      </main>
    );
  }
}
