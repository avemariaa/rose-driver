import { Container, Row, Col } from "reactstrap";
import React from "react";
import Grid from "@material-ui/core/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
import "../styles/OrderCard.css";
import {
  MDBCard,
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBContainer
} from "mdb-react-ui-kit";

const OrderCard = () => {
  return (
    <div className="order_card">
      <Container>
        <MDBCard alignment="center">
          <MDBCardHeader>Order ID:</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>12345667890</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <MDBBtn href="#" className="phone_btn">
              <PhoneIcon />
            </MDBBtn>
            <MDBBtn href="#" className="btn">
              Confirm
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </Container>
    </div>
  );
};

export default OrderCard;
