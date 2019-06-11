import React, { Component } from 'react';
import './Home.scss';
import Launches from '../components/Launches';

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
    return (
      <div>
        <Launches query={query} name={name} />
      </div>
    );
  }
}
