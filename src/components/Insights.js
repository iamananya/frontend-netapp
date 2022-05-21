import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getFinances } from "../APIClient/apiclient";
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import './style.css'

function Insights() {
    const [isLoading, setLoading] = useState(true);
    const [fin, setFin] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getFinances();
      setFin(res.data);
      setLoading(false)
      console.log(res.data);
      console.log(fin);
    })();

    // console.log('hi')
  }, []);
  return isLoading == true ? (
    <Container style={{ marginTop: "5%" ,width:"20%"}}>
        <Col xs={6}>
        <h2 className="indigo-text text-darken-4">Financial Status</h2>
          <div style={{ marginTop: "5%", fontSize: "20px" }}>
    <div class="progress">
      <div class="indeterminate"></div>
    </div></div></Col></Container>
  ) :(
    <div style={{ marginTop: "5%" }}>
      <Container>
        <Col xs={6}>
          <h2 className="indigo-text text-darken-4">Financial Status</h2>
          <div style={{ marginTop: "5%" ,fontSize:"20px"}}>
            <div> 
       
                <Table striped bordered hover>
                <thead>
                  <tr>
                  
                    <th>Comapany Name</th>
                    <th>Total Investment</th>
                    <th>Seed Amount</th>
                    <th>Venture</th>
                    <th>Angel</th>
                    <th>Grant Given</th>
                    <th>Product Croud Funding</th>
                    <th>Round A</th>
                    <th>Round B</th>

                  </tr>
                </thead>
                <tbody>
                {fin.map((i) => (
                  <tr>
                 
                    <td>{i.name}</td>
                    <td>{i.total_investment}</td>
                    <td>{i.seed}</td>
                    <td>{i.venture}</td>
                    <td>{i.angel}</td>
                    <td>{i.grant_given}</td>
                    <td>{i.product_crowdfunding}</td>
                    <td>{i.round_A}</td>
                    <td>{i.round_B}</td>

                 
                  </tr>
                   ))}
                 
                </tbody>
              </Table>

                </div>
                </div>
                </Col></Container></div>
  )
}

export default Insights