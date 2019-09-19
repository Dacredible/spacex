import React, { Component } from 'react';
import './Home.scss';
import Launches from '../components/Launches';
import Background from '../components/Background';

export default class Home extends Component {
  state = {
    query: `
    query LaunchesQuery {
      upcoming {
        flight_number
        mission_name
        launch_date_local
        launch_success
      }
    }
    `,
    name: 'upcoming',
  };

  render() {
    const { query, name } = this.state;
    console.log(process.env.REACT_APP_USE_BACKEND);
    return (
      <main>
        {/* <h1 className="main-title">SpaceX</h1>
        <h2 className="page-title">
          Cosmic
          <br />
          <span className="title__outline">Surfin</span>
        </h2> */}
        <Background />
      </main>
    );
  }
}
