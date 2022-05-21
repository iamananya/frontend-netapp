import React from "react";
import Navbar from "./Navbar";
import './style.css'
function Charts() {
  return (
    
     
<div>

      <section className="container section scrollspy" id="photos">
      <h2 className="indigo-text text-darken-4">Visualization Plots</h2>
      <div className="row">
          <div className="col s12  offset-l1">
            <h2 className="indigo-text text-darken-4">Heatmap</h2>
            <p>
             This heatmap is a correlation of various features we take into account regarding startup predictions
              
            </p>
          </div>
          </div>
        <div className="row">
          <div className="col s12 z-depth-5">
            <img
              src="heatmap.png"
              alt=""
              className="responsive-img materialboxed"
            ></img>
          </div>
          
          </div>
        <div class="row">
      <div class="col s12 l6  push-l7 z-depth-5 ">
          <img src="founding_year.png" alt="" class="responsive-img materialboxed"/>
      </div>
      <div class="col s12 l6  pull-l6 right-align ">
        <h2 class="indigo-text text-darken-4">Startup Rise</h2>
        <p>Frequency of startups occuring each year</p>
      </div>
    </div>
        
        <div className="row">
          <div className="col s12 l6 z-depth-5">
            <img
              src="count_round.png"
              alt=""
              className="responsive-img materialboxed"
            ></img>
          </div>
          <div className="col s12 l4 offset-l1">
            <h2 className="indigo-text text-darken-4">Funded Startups</h2>
            <p>
              We are also considering markets and models spread out across multiple regions to understand the trend of investment and growth worldwide.
              
            </p>
          </div>
        </div>
   
      </section>
    </div>
  );
}

export default Charts;
