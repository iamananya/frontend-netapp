import React from 'react'

function Charts() {
  return (
    <div>  <section className="container section scrollspy" id="photos">
    <div className="row">
      <div className="col s12 l6 z-depth-5">
        <img
          src="graph3.png"
          alt=""
          className="responsive-img "
        ></img>
      </div>
      <div className="col s12 l4 offset-l1">
        <h2 className="indigo-text text-darken-4"></h2>
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

</div>
  )
}

export default Charts