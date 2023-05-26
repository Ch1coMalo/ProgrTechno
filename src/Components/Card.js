import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Cards = ({ item }) => {
  return (
    <>
      <Container>
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}
              >
                
                  <Card.Img src={Val.img}
                  className="photo w-50"
                  style={{padding:'15px'}}
                  
                  />
                  
                <Card.Body >
                  <Card.Title >
                    {Val.title}
                  </Card.Title>
                  <Card.Text >{Val.desc}</Card.Text>

                  <h2> </h2>
                  <Link to="/step1"><button type="button" class="btn btn-warning">Записаться на прием</button></Link>
                </Card.Body>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Cards;