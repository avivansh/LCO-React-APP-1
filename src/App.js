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
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
  };

  const changeItem = (itemNumber) => {
    console.log(`${itemNumber} => ${itemArray[itemNumber]}`);
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already filled!", { type: "failure" });
    }

    checkIsWinner();
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
              {winMessage ? (
                <div className="mb-2 mt-2">
                  <h1 className="text-success text-uppercase text-center">
                    {winMessage}
                  </h1>
                  <Button color="success" block onClick={reloadGame}>
                    Reload Game !
                  </Button>
                </div>
              ) : (
                <h1 className="text-center text-warning">
                  {isCross ? "Cross" : "Circle"} turns
                </h1>
              )}
              <div className="grid">
                {itemArray.map((item, index) => (
                  <Card onClick={() => changeItem(index)} color="warning">
                    <CardBody className="box">
                      <Icon name={item} />
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
