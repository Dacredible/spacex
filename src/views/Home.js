import React, { Component } from 'react';
import './Home.scss';

import Launches from '../components/Launches';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Launches />
      </div>
    );
  }
}
