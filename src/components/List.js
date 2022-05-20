import React, { useState,useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {getCompanies} from "../APIClient/apiclient"

function ListComp() {

  const [comp,setComp]=useState([]);
  useEffect( () => {
    (async()=>{
      const res = await getCompanies();
      setComp(res.data);
      console.log(res.data);
      console.log(comp);
    })();
    
    // console.log('hi')
  }, []);
  return (
   
     <div style={{marginTop:"5%"}}>
      <Container>
        <Row>
          <Col>
           
          </Col>
          <Col xs={6}>
            <h2>Company List</h2>
            <div style={{ marginTop: "5%" }}>
              <div>
                <Col style={{ padding: "20px" ,fontSize:"20px"}}>
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
                </Col>
              </div>
            </div>
          </Col>
          <Col>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ListComp;