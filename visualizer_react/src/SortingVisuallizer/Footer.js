import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
const footer = props => (
    <footer>
        <nav class="navbar fixed-bottom navbar-light navbar-dark">
            <div>
                <label htmlFor="customRange1" id="label1">Speed</label>
            </div>
            <div>
                <input type="range" className="custom-range" id="customRange1"></input>
            </div>

            <div>
                <label htmlFor="customRange1" id="label1">Array Size</label>
            </div>
            <div>
                <input type="range" className="custom-range" id="customRange1"></input>
            </div>



            <button id="btn1" className="btn">Custom</button>

            <div id="a" className="form-group">

                <input className="form-control" id="inputArray" type="text" />

            </div>
            <button id="btn2" className="btn">OK</button>

        </nav>




    </footer>

);

export default footer