import { Container, Row, Col } from "reactstrap";
import React from "react";
import OrderCard from "../components/OrderCard";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <OrderCard />
      </Container>
    </div>
  );
};

export default Home;
