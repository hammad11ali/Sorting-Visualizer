import React from "react";
import "./Navbar.css";

const navbar = props => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand">Sorting Visualizer</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li>
            <button type="button" onClick={props.handleRandom} className="btn">
              Random Array
            </button>
          </li>
          <li>
            <select
              id="inputState"
              className="form-control"
              placeholder="choose"
            >
              {/* <option value="0">Merge Sort</option>
              <option value="1">Quick Sort</option> */}
              <option value="2">Selection Sort</option>
              <option value="3">Shell Sort</option>
              <option value="4">Odd-Even Sort</option>
              <option value="5">Bubble Sort</option>
              <option value="6">Cocktail Sort</option>
              <option value="7">Comb Sort</option>
              <option value="8">Gnome Sort</option>
              <option value="9">Insertion Sort</option>
            </select>
          </li>
          <li>
            <button
              type="button"
              onClick={() =>
                props.handleAlgorithm(
                  document.getElementById("inputState").selectedIndex
                )
              }
              className="btn"
            >
              Sort
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
