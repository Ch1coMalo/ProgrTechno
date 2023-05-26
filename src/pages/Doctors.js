import React, { useState } from "react";
import Data from "../Components/Data.js";
import Card from "../Components/Card.js";
import Buttons from "../Components/Buttons.js";
import { Button } from "react-bootstrap";


const Doctors = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h2 className="col-12 text-center my-3 fw-bold">Наш состав</h2>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        </div>
      </div>
    </>
  );
};

export default Doctors;







/* import React, {useState} from "react";
import { Container, CardDeck, Card, Row, Col, Button, li } from "react-bootstrap";
import { Link } from "react-router-dom";
import woman from "../Components/kerfin7_nea_2757.jpg";
import man from "../Components/8417765.jpg";



export const Doctors = () => (
    <>
        <Container>
            <h4 className="text-center m-4"> Наш состав </h4>
            <div id="myBtnContainer">
                <button class="btn active" onclick="filterSelection('all')">Показать все</button>
                <button class="btn" onclick="filterSelection('cardio')"> Кардиологи</button>
                <button class="btn" onclick="filterSelection('gastro')"> Гастроэнтерологи</button>
                <button class="btn" onclick="filterSelection('derm')"> Дерматологи</button>
                <button class="btn" onclick="filterSelection('lor')"> ЛОРы</button>
                <button class="btn" onclick="filterSelection('mamm')"> Маммологи</button>
                <button class="btn" onclick="filterSelection('nevr')"> Неврологи</button>
                <button class="btn" onclick="filterSelection('neyr')"> Нейрохирурги</button>
                <button class="btn" onclick="filterSelection('oft')"> Офтальмологи</button>
            </div>
            <h1>ㅤ</h1> 
            <Row>
                <Col>
                    <Card class = "filterDiv cardio">
                        <Card.Img
                            variant="top"
                            src={woman}
                        />
                        <Card.Body>
                            <Card.Title>Игнатьева Юлия Викторовна</Card.Title>
                            <Card.Text> Кардиолог </Card.Text>
                            <Link to="/step1"><button type="button" class="btn btn-warning">Записаться на прием</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={man}
                        />
                        <Card.Body>
                            <Card.Title>Смирнов Илья Николаевич</Card.Title>
                            <Card.Text> Кардиолог </Card.Text>
                            <Link to="/step1"><button type="button" class="btn btn-warning">Записаться на прием</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={man}
                        />
                        <Card.Body>
                            <Card.Title>Иванов Дмитрий Иванович</Card.Title>
                            <Card.Text> Гастроэнтеролог </Card.Text>
                            <Link to="/step1"><button type="button" class="btn btn-warning">Записаться на прием</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={man}
                        />
                        <Card.Body>
                            <Card.Title>Соколов Сергей Викторович</Card.Title>
                            <Card.Text> Гастроэнтеролог </Card.Text>
                            <Link to="/step1"><button type="button" class="btn btn-warning">Записаться на прием</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={woman}
                        />
                        <Card.Body>
                            <Card.Title>Соболева Наталья Семеновна</Card.Title>
                            <Card.Text> Дерматолог </Card.Text>
                            <Link to="/step1"><button type="button" class="btn btn-warning">Записаться на прием</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <h1>      </h1><h1>      </h1><h1>      </h1><h1>      </h1>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={woman}
                        />
                        <Card.Body>
                            <Card.Title>Севастьянова Евгения Евгеньевна</Card.Title>
                            <Card.Text> ЛОР </Card.Text>
                            <Link to="/step1"><button type="button" class="btn btn-warning">Записаться на прием</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={man}
                        />
                        <Card.Body>
                            <Card.Title>Сергеев Андрей Владимирович</Card.Title>
                            <Card.Text> Маммолог </Card.Text>
                            <Link to="/step1"><button type="button" class="btn btn-warning">Записаться на прием</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={man}
                        />
                        <Card.Body>
                            <Card.Title>Соболев Илья Григорьевич</Card.Title>
                            <Card.Text> Невролог </Card.Text>
                            <Link to="/step1"><button type="button" class="btn btn-warning">Записаться на прием</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={woman}
                        />
                        <Card.Body>
                            <Card.Title>Васильева Надежда Дмитриевна</Card.Title>
                            <Card.Text> Нейрохирург </Card.Text>
                            <Link to="/step1"><button type="button" class="btn btn-warning">Записаться на прием</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={man}
                        />
                        <Card.Body>
                            <Card.Title>Михайлов Владимир Владимирович</Card.Title>
                            <Card.Text> Офтальмолог </Card.Text>
                            <Link to="/step1"><button type="button" class="btn btn-warning">Записаться на прием</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
);

*/


/* const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', (event)=> {
    if (event.target.tagName !== 'LI' ) return false;

    let filterClass = event.target.dataset['f'];
    

});
*/
