import React from 'react';
import './Navbar.css'

const navbar = props => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand">Sorting Visualizer</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li>
                        <button type="button" className="btn">Random Array</button>
                    </li>
                    <li>
                        <select id="inputState" className="form-control" placeholder="choose">
                            <option value="">Merge Sort</option>
                            <option>Quick Sort</option>
                            <option>Quick Sort</option>
                            <option>Shell Sort</option>
                            <option>Bubble Sort</option>
                            <option>Insertion Sort</option>
                        </select>
                    </li>
                    <li>
                        <button type="button" className="btn">Sort</button>
                    </li>
                </ul>
            </div>
        </nav>

    </header>

);

export default navbar