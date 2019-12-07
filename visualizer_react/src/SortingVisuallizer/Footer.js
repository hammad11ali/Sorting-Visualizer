import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

class Footer extends Component {
  state = { custom: "none" };
  setCustom = () => {
    this.setState({
      custom: ""
    });
  };
  setArray = () => {
    let arr = [];
    let value = document.getElementById("inputArray").value;
    var isValid = /^[0-9,]*$/.test(value);
    if (isValid) {
      let values = value.split(",");
      for (let i = 0; i < values.length; i++) {
        if (values[i] > 0 && values[i] < 26) {
          arr.push(values[i]);
        } else {
          isValid = false;
          break;
        }
      }
    }
    if (!isValid || arr.length < 3) {
      window.alert("Invalid Input");
      return;
    }
    document.getElementById("inputArray").innerHTML = "";
    this.setState({
      custom: "none"
    });
    this.props.handleSetArray(arr);
  };
  render() {
    return (
      <footer>
        <nav class="navbar fixed-bottom navbar-light navbar-dark">
          <div>
            <label htmlFor="customRange1" id="label1">
              Speed
            </label>
          </div>
          <div>
            <input
              type="range"
              className="Speed"
              id="Speed"
              min="500"
              max="1500"
              onInput={() =>
                this.props.handleSpeedofArray(
                  document.getElementById("Speed").value
                )
              }
            ></input>
          </div>

          <div>
            <label htmlFor="customRange1" id="label1">
              Array Size
            </label>
          </div>
          <div>
            <input
              type="range"
              className="custom-range"
              id="custom-range"
              min="3"
              max="10"
              onInput={() =>
                this.props.handleSize(
                  document.getElementById("custom-range").value
                )
              }
            ></input>
          </div>
          <button onClick={this.setCustom} id="btn1" className="btn">
            Custom
          </button>
          <div
            id="a"
            style={{ display: this.state.custom }}
            className="form-group"
          >
            <input className="form-control" id="inputArray" type="text" />
            <button id="btn2" onClick={this.setArray} className="btn m-2">
              OK
            </button>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Footer;
