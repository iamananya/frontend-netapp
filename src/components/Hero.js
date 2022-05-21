import React from "react";
import Navbar from "./Navbar";
import './style.css'
function Hero() {
  return (
    <div>
      {" "}
      <div className="parallax-container">
        <div className="parallax">
          <img src="startup.jpg" alt="" className="responsive-img"></img>
        </div>
      </div>
      <section class="section container" id="services">
    <div class="row ">
      <div class="col s12 l4">
        <h2 class="indigo-text text-darken-4">What We do..</h2>
        <p>We provide services to both startups and investors through our cutting edge AI technology </p>
        <p>We conduct data analytics and visualisation and evaluate the business models through our technology trained on real time data from the current market</p>
      </div>
      <div class="col s12 l6 offset-l2 grey lighten-1">
       
        <ul class="tabs">
          <li class="tab col s6">
            <a href="#photography" class="active indigo-text text-darken-4" style={{fontSize:"20px"}}>Startup</a>
          </li>
          <li class="tab col s6">
            <a href="#editing" class="indigo-text text-darken-4" style={{fontSize:"20px"}}>Investor</a>
          </li>
        </ul>
        <div id="photography" class="col s12">
            <p class="flow-text indigo-text text-darken-4">Startup</p>
            <p>Startups that are currently looking for funding and an idea about how they fit into the market</p>
            <p>We conduct in depth analysis and forecasting of their model so that they have a good idea of what investors are looking at and how they will perfom in the current market</p>
        </div>
        <div id="editing" class="col s12">
            <p class="flow-text indigo-text text-darken-4">Investor</p>
            <p>In order to evaluate a business model for investment investors need an idea about the individual as well as comparative performance of a model </p>
            <p>We here at MARY.AI give investors the tools to evaluate the startups and set up a benchmark in the market for them to understand the business model's fit</p>
        </div>
        </div>
      </div>
    
  </section>
      <section className="container section scrollspy" id="photos">
        <div className="row">
          <div className="col s12 l6 z-depth-5">
            <img
              src="graph3.png"
              alt=""
              className="responsive-img "
            ></img>
          </div>
          <div className="col s12 l4 offset-l1">
            <h2 className="indigo-text text-darken-4">Target Markets</h2>
            <p>
              Our dataset comprises of a diverse set of markets. 
              Let's take a look at the most popular markets that startups are pusuing currently worldwide.
            </p>
          </div>
        </div>
        <div class="row">
      <div class="col s12 l6  push-l7 z-depth-5 ">
          <img src="graph4.png" alt="" class="responsive-img materialboxed"/>
      </div>
      <div class="col s12 l6  pull-l6 right-align ">
        <h2 class="indigo-text text-darken-4">Investment</h2>
        <p>We are working with a huge variety of business models. 
              Here is an attempt to understand the role of total investment in the success and failure of a model.</p>
      </div>
    </div>
        
        <div className="row">
          <div className="col s12 l6 z-depth-5">
            <img
              src="graph5.png"
              alt=""
              className="responsive-img materialboxed"
            ></img>
          </div>
          <div className="col s12 l4 offset-l1">
            <h2 className="indigo-text text-darken-4">Impact Regions</h2>
            <p>
              We are also considering markets and models spread out across multiple regions to understand the trend of investment and growth worldwide.
              
            </p>
          </div>
        </div>
      </section>


     

      

      
      <div className="parallax-container">
        <div className="parallax">
          <img src="wordcloud.png" alt="" className="responsive-img" />
        </div>
      </div>
      <section className="section container scrollspy " id="contact">
        <div className="row ">
          <div className="col s12 l5">
            <h2 className="indigo-text text-darken-4">Get in Touch</h2>
            <p>
              If you are a startup that wants to raise funding and are eager to know about an investor's insights or the market dynamics then reach out to us and we will be happy to help you!
            </p>
            <p>
              If you are investor who wants to evaluate a startup model and understand if it is a good fit in the current market and appropriate for investment then MARY.AI is the right place for you!
            </p>
            
          </div>
          <div className="col s12 l5 offset-l2 z-depth-2">
            <form>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input type="email" id="email" />
                <label for="email">Your Email</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">message</i>
                <textarea
                  id="message"
                  className="materialize-textarea"
                  cols="20"
                  rows="20"
                ></textarea>
                <label for="message">Your Message</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">date_range</i>
                <input type="text" id="date" className="datepicker" />
                <label for="date">Choose a date you need us for...</label>
              </div>
              <div className="input-field">
                <p>Services required:</p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Startup</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Investor</span>
                  </label>
                </p>
              </div>
              <div className="input-field center">
                <button className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="page-footer blue-grey darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h1 className="indigo-text">MARY.AI</h1>
                
              
            </div>
            <div className="col l4 offset-l2 s12 ">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#">
                    Linked In
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright grey darken-4">
          <div className="container center-align">&copy; 2022 MARY.AI</div>
        </div>
      </footer>
    </div>
  );
}

export default Hero;
