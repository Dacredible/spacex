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
      return <div className="launch__status launch__status--success">Successful</div>;
    }
    return <div className="launch__status launch__status--fail">Fail</div>;
  };

  render() {
    const { query, name } = this.state;
    const launchesArray = LaunchesData(query, name);
    const latestLaunch = launchesArray[0];
    console.log(latestLaunch);
    return (
      <main>
        <section className="launch--latest">
          <div className="launch--latest-title">Latest Launch</div>
          <div className="row">
            <h3 className="launch__filght-number">#{latestLaunch.flight_number}</h3>
            <img className="launch__patch" src={latestLaunch.links.mission_patch_small} alt="" />
            {this.displayTag(latestLaunch.launch_success)}
          </div>
          <div className="launch__title">{latestLaunch.mission_name}</div>
          <div className="row">
            <div className="launch__detail">
              <h4>Rocket</h4>
              <p>{latestLaunch.rocket.rocket_name}</p>
            </div>
            <div className="launch__detail">
              <h4>Date</h4>
              <p>{latestLaunch.launch_date_local}</p>
            </div>
            <div className="launch__detail">
              <h4>Site</h4>
              <p>{latestLaunch.launch_site.site_name}</p>
            </div>
          </div>
          <div className="row">
            <p>{latestLaunch.details}</p>
          </div>
          <div className="past-launches">Past Launches</div>
        </section>
        <section className="launch-list">list</section>
      </main>
    );
  }
}
