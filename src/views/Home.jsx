import React, { Component } from 'react';
import './Home.scss';

export default class Home extends Component {
  render() {
    console.log(process.env.REACT_APP_USE_BACKEND);
    return (
      <main>
        {/* <h1 className="main-title">SpaceX</h1>
        <h2 className="page-title">
          Cosmic
          <br />
          <span className="title__outline">Surfin</span>
        </h2> */}
        {/* <Background /> */}
      </main>
    );
  }
}
