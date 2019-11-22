import React from "react";
import "./SortingVisuallizer.css";
import bubbleSort from "../SortingAlgorithm/bubbleSort.js";
import InsertionSort from "../SortingAlgorithm/InsertionSort.js";
import SelectionSort from "../SortingAlgorithm/SelectionSort.js";
import CocktailSort from "../SortingAlgorithm/CocktailSort.js";
import CombSort from "../SortingAlgorithm/CombSort.js";
import GnomeSort from "../SortingAlgorithm/GnomeSort.js";
const ANIMATION_SPEED_MS = 500;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

//
const TERTIARY_COLOR = "green";

export default class SortingVisuallizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Randomarray: []
    };
  }
  componentDidMount() {
    this.resetArray();
  }
  resetArray() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(randomIntFromInterval(5, 25));
    }
    this.setState({
      Randomarray: array
    });
  }

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
      }, ANIMATION_SPEED_MS * j);
      j++;
      if (current[2]) {
        setTimeout(() => {
          array_bar[current[0]].style.backgroundColor = TERTIARY_COLOR;
          array_bar[current[1]].style.backgroundColor = TERTIARY_COLOR;
        }, ANIMATION_SPEED_MS * j);
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
        }, ANIMATION_SPEED_MS * j);
        j++;
      } else
        setTimeout(() => {
          array_bar[current[0]].style.backgroundColor = PRIMARY_COLOR;
          array_bar[current[1]].style.backgroundColor = PRIMARY_COLOR;
        }, ANIMATION_SPEED_MS * j);
      j++;
    }
  }
  bubbleSort_animate = () => {
    let animation = bubbleSort(this.state.Randomarray);
    this.general_Animate(animation);
  };
  InsertionSort_animate = () => {
    let animation = InsertionSort(this.state.Randomarray);
    this.general_Animate(animation);
  };
  selectionSort = () => {
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
  render() {
    return (
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
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.selectionSort()}>Selection Sort</button>
        <button onClick={() => this.bubbleSort_animate()}>Bubble Sort</button>
        <button onClick={() => this.CocktailSort_animate()}>
          CocktailSort
        </button>
        <button onClick={() => this.CombSort_animate()}>Comb Sort</button>
        <button onClick={() => this.GnomeSort_animate()}>Gnome Sort</button>
        <button onClick={() => this.InsertionSort_animate()}>
          Insertion Sort
        </button>
        <button onClick={() => this.testSortingAlgorithms()}>
          Test Sorting Algorithms (BROKEN)
        </button>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
