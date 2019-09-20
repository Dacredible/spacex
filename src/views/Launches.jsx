import React, { Component } from 'react';
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

  render() {
    const { query, name } = this.state;
    return (
      <div>
        <LaunchesData query={query} name={name} />
      </div>
    );
  }
}
