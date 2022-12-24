import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import HeroSection from "./HeroSection";
import Icon from "./components/Icon";

import { Button, Card, CardBody, Container, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [count, setCount] = useState(0);
  const [isCross, setIsCross] = useState(0);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    //
  };

  const checkIsWinner = () => {
    //
  };

  const changeItem = (itemNumber) => {
    //
  };

  return (
    <div>
      <h1> Section 1 </h1>
      <Navbar />
      <HeroSection />
      <AppSection />
      <CardSection />
      <Footer />
      <hr />
      <h1> Section 2 </h1>
      <div className="StateCounter">
        <header>
          <h2> counter app using state/hooks</h2>
        </header>
        <h2> Current value of the count is:- {count}</h2>
        <button onClick={() => setCount(0)}> Reset Couň̌ter</button>
        <button onClick={() => (count > 10 ? "" : setCount(count + 1))}>
          Increase Couň̌ter
        </button>
        <button onClick={() => (count === 0 ? "" : setCount(count - 1))}>
          Decrease Couň̌ter
        </button>
      </div>
      <hr />
      <h1> Section 3 </h1>
      <div className="app__tic-tac-toe">
        <Container className="p-5">
          <ToastContainer position="bottom-center" />
          <Row>
            <Col md={6} className="offset-md-3">
              <div className="grid">
                {itemArray.map((item, index) => (
                  <Card>
                    <CardBody className="box">
                      <Icon />
                    </CardBody>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
