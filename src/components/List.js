import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getCompanies } from "../APIClient/apiclient";
import Table from "react-bootstrap/Table";
import "./style.css";

function ListComp() {
  const [isLoading, setLoading] = useState(true);
  const [comp, setComp] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getCompanies();
      setComp(res.data);
      setLoading(false);
      console.log(res.data);
      console.log(comp);
    })();

    // console.log('hi')
  }, []);
  return isLoading == true ? (
    <Container style={{ marginTop: "5%" ,width:"20%"}}>
        <Col xs={6}>
        <h2 className="indigo-text text-darken-4">Company List</h2>
          <div style={{ marginTop: "5%", fontSize: "20px" }}>
    <div class="progress">
      <div class="indeterminate"></div>
    </div></div></Col></Container>
  ) : (
    <div style={{ marginTop: "5%" }}>
      <Container>
        <Col xs={6}>
          <h2 className="indigo-text text-darken-4">Company List</h2>
          <div style={{ marginTop: "5%", fontSize: "20px" }}>
            <div>
              {/* <Col style={{ padding: "20px" ,fontSize:"20px"}}>
                  {comp.map((i) => (
                    <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                   <Col>
                   <Card >
                    <Card.Body>
                      <Card.Title>{i.company_name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{i.country_code}</Card.Subtitle>
                      <Card.Text>
                        {i.market}
                      </Card.Text>
                      
                    </Card.Body>
                  </Card></Col>))}
                  
                </Row>
                  ))}
                </Col> */}
                
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Comapany Name</th>
                    <th>Market Type</th>
                    <th>Country Code</th>
                    <th>Occupancy Status</th>
                  </tr>
                </thead>
                <tbody>
                  {comp.map((i) => (
                    <tr>
                      <td>{i.name}</td>
                      <td>{i.market}</td>
                      <td>{i.country_code}</td>
                      <td>{i.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default ListComp;
