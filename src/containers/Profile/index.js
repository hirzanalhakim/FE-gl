import React, { Component } from 'react';
import NavbarTop from '../../components/NavbarTop';
import {
  Row,
  Col,
  Container
} from "reactstrap";

class Profile extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <Container fluid>
          <Row>
            <Col md={3}></Col>
            <Col md={6} style={{ padding: 0 }}>
              <div className="page-container">
                Profile
              </div>


            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Profile;