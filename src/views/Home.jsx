import React, { Component } from 'react';
import './Home.scss';

export default class Home extends Component {
  state = {
    date: '',
  };

  render() {
    console.log(process.env.REACT_APP_USE_BACKEND);
    const { date } = this.state;
    return <main>{date}</main>;
  }
}
