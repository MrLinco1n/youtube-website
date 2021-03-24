import React from 'react';
import '../App.css';
import { setState } from "react";

import ReactDOM  from 'react-dom';


class ProductSquare extends React.Component {
  render() {
    return (
      <button
        className="ProductSquare"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}