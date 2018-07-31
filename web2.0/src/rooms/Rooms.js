import React, { Component } from 'react';
import Header from "./Header";
import About from "./About";
import Summary from "./Summary"
import Footer from '../footer/Footer';

require('./rooms.component.scss');


class Rooms extends Component {
  render() {

    console.log("props", this.props.params.rid);
    return (
      <div>
        <Header rid={this.props && this.props.params.rid} />
        <Summary rid={this.props && this.props.params.rid} />
        <About rid={this.props && this.props.params.rid} />
        <Footer rid={this.props && this.props.params.rid} />
      </div>
    );
  }
}

export default Rooms;
