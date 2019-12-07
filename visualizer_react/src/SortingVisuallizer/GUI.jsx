import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./SortingVisuallizer.css";
import bubbleSort from "../SortingAlgorithm/bubbleSort.js";
import InsertionSort from "../SortingAlgorithm/InsertionSort.js";
import SelectionSort from "../SortingAlgorithm/SelectionSort.js";
import CocktailSort from "../SortingAlgorithm/CocktailSort.js";
import CombSort from "../SortingAlgorithm/CombSort.js";
import GnomeSort from "../SortingAlgorithm/GnomeSort.js";
import ShellSort from "../SortingAlgorithm/ShellSort.js";
import oddEvenSort from "../SortingAlgorithm/oddEvenSort.js";

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

//
const TERTIARY_COLOR = "green";

class GUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arraySize: 10,
      Randomarray: [],
      ANIMATION_SPEED_MS: 500
    };
  }
  componentDidMount() {
    this.resetArray(this.state.arraySize);
    this.handleArraySize(this.state.arraySize);
  }
  setArray = arr => {
    this.setState({
      Randomarray: arr,
      arraySize: arr.length
    });
  };
  resetArray = size => {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(randomIntFromInterval(5, 25));
    }
    this.setState({
      Randomarray: array
    });
  };
  handleResetArray = () => {
    this.resetArray(this.state.arraySize);
  };
  handleArraySize = aSize => {
    this.setState({
      arraySize: aSize
    });
    this.resetArray(aSize);
  };
  handleSpeed = speed => {
    this.setState({
      ANIMATION_SPEED_MS: speed
    });
  };
  handleSort = index => {
    switch (index) {
      case 0:
        //merge Sort
        break;
      case 1:
        //quick Sort
        break;
      case 2:
        //selection Sort
        this.selectionSort_animate();
        break;
      case 3:
        //shell Sort
        this.shellSort_animate();
        break;
      case 4:
        //odd-even Sort
        this.oddEvenSort_animate();
        break;
      case 5:
        //bubble Sort
        this.bubbleSort_animate();
        break;
      case 6:
        //Cocktail Sort
        this.CocktailSort_animate();
        break;
      case 7:
        //comb Sort
        this.CombSort_animate();
        break;
      case 8:
        //gnome Sort
        this.GnomeSort_animate();
        break;
      case 9:
        //insertion Sort
        this.InsertionSort_animate();
        break;

      default:
        break;
    }
    // case switch to call required sort
  };
  quickSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }
  general_Animate(animation) {
    var j = 1;
    let array_bar = document.getElementsByClassName("array-bar");
    for (var i = 0; i < animation.length; i++) {
      let current = animation[i];
      setTimeout(() => {
        array_bar[current[0]].style.backgroundColor = SECONDARY_COLOR;
        array_bar[current[1]].style.backgroundColor = SECONDARY_COLOR;
      }, this.state.ANIMATION_SPEED_MS * j);
      j++;
      if (current[2]) {
        setTimeout(() => {
          array_bar[current[0]].style.backgroundColor = TERTIARY_COLOR;
          array_bar[current[1]].style.backgroundColor = TERTIARY_COLOR;
        }, this.state.ANIMATION_SPEED_MS * j);
        j++;
        setTimeout(() => {
          let temp = array_bar[current[0]].innerHTML;
          array_bar[current[0]].innerHTML = array_bar[current[1]].innerHTML;
          array_bar[current[1]].innerHTML = temp;
          array_bar[current[0]].style.height = `${array_bar[current[0]]
            .childNodes[0].innerHTML * 20}px`;
          array_bar[current[1]].style.height = `${array_bar[current[1]]
            .childNodes[0].innerHTML * 20}px`;
          array_bar[current[0]].style.backgroundColor = PRIMARY_COLOR;
          array_bar[current[1]].style.backgroundColor = PRIMARY_COLOR;
        }, this.state.ANIMATION_SPEED_MS * j);
        j++;
      } else
        setTimeout(() => {
          array_bar[current[0]].style.backgroundColor = PRIMARY_COLOR;
          array_bar[current[1]].style.backgroundColor = PRIMARY_COLOR;
        }, this.state.ANIMATION_SPEED_MS * j);
      j++;
    }
    setTimeout(() => {
      window.alert("Complete");
    }, this.state.ANIMATION_SPEED_MS * j);
  }
  bubbleSort_animate = () => {
    let animation = bubbleSort(this.state.Randomarray);
    this.general_Animate(animation);
  };
  InsertionSort_animate = () => {
    let animation = InsertionSort(this.state.Randomarray);
    this.general_Animate(animation);
  };
  shellSort_animate = () => {
    console.log("shell");
    let animation = ShellSort(this.state.Randomarray);
    console.log(animation);
    this.general_Animate(animation);
  };
  oddEvenSort_animate = () => {
    let animation = oddEvenSort(this.state.Randomarray);
    this.general_Animate(animation);
  };
  selectionSort_animate = () => {
    let animation = SelectionSort(this.state.Randomarray);
    this.general_Animate(animation);
  };
  CocktailSort_animate = () => {
    let animation = CocktailSort(this.state.Randomarray);
    this.general_Animate(animation);
  };
  CombSort_animate = () => {
    let animation = CombSort(this.state.Randomarray);
    this.general_Animate(animation);
  };
  GnomeSort_animate = () => {
    let animation = GnomeSort(this.state.Randomarray);
    this.general_Animate(animation);
  };

  setArray = arr => {
    this.setState({ Randomarray: arr });
  };
  render() {
    return (
      <div className="GUI">
        <div>
          <Navbar
            handleAlgorithm={this.handleSort}
            handleRandom={this.handleResetArray}
          />
        </div>
        <div className="array-container">
          {this.state.Randomarray.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value * 20}px` }}
            >
              <p>{value}</p>
            </div>
          ))}
        </div>
        <div>
          <Footer
            handleSetArray={this.setArray}
            handleSize={this.handleArraySize}
            handleSpeedofArray={this.handleSpeed}
          />
        </div>
      </div>
    );
  }
}
export default GUI;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
