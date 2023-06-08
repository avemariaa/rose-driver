import { Container, Row, Col } from "reactstrap";
import React from "react";
import "../styles/OrderCard.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader
} from "mdb-react-ui-kit";

const History = () => {
  return (
    <div className="order_card">
      <Container>
        <MDBCard alignment="center">
          <MDBCardHeader>Order ID:</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>12345667890</MDBCardTitle>
            <MDBCardText>(Recent order from firebase)</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </Container>
    </div>
  );
};

export default History;
