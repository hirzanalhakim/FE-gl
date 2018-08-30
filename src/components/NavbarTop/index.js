import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, Input, Collapse, Row, Container, Col } from 'reactstrap';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import profile from './../../assets/defaultUser.png';

import logo from "./../../assets/soup.png";

export default class NavbarTop extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    const { collapse } = this.state
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md={3}></Col>
            <Col md={6} style={{ padding: 0 }}>
              <div className='navbar-header' style={{ paddingLeft: 10 }}>

                <Link to="/" className="logout-btn">Logout</Link>

                <Col md={6} style={{ textAlign: 'left', paddingLeft: 0 }}>
                  <Link to="/">
                    <img src={logo} style={{ width: '11%', marginRight: 10, padding: 0 }} alt="logo" />
                  </Link>
                </Col>

              </div>

              <div className='navbar' style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                <Link style={{ width: '10%', padding: 0 }} to="/">
                  <img src={profile} alt="profile" style={{ borderRadius: '50%', width: '90%', height: '90%', backgroundColor: 'white' }} />
                </Link>
                <InputGroup style={{ width: '75%', paddingLeft: '5px', paddingRight: '5px' }} >
                  <Input placeholder="Search place ..." />
                </InputGroup>

                <div style={{ width: '10%', padding: 0 }} onClick={this.toggleNavbar}>
                  {collapse ? <FaChevronCircleUp style={{ height: '70%', width: '70%', color: 'white' }} />
                    : <FaChevronCircleDown style={{ height: '70%', width: '70%', color: 'white' }} />
                  }

                </div>
                <Collapse isOpen={this.state.collapse} style={{ margin: '0 auto' }}>
                  <Link to="/mycollection">My Collection</Link><br />
                  <Link to="/friends">Friends</Link><br />
                  <Link to="/">Logout</Link>
                </Collapse>

              </div>
            </Col>
          </Row>

        </Container>


        {/* <div style={{ width: '10%' }}>
          <Link to="/profile">Profile</Link>
        </div> */}
      </div>
    )
  }
}