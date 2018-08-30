import React, { Component } from 'react';
import NavbarTop from '../../components/NavbarTop';
import CardCollection from '../../components/CardCollection';
import {
  Row,
  Col,
  Container
} from "reactstrap";
import { apiHost } from './../../config';

export default class MyCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCollection: [],
      cardClicked: ''
    }
  }
  componentDidMount() {
    fetch(`${apiHost}/collection/getcollection/1`)
      .then((response) => response.json())
      .then((res) => {
        this.setState({ dataCollection: res })
        console.log('res collection', res);
      })
      .catch(error => console.error('Error:', error));
  }
  render() {
    const { dataCollection } = this.state;
    return (
      <div>
        <NavbarTop />
        <Container fluid>
          <Row>
            <Col md={3}></Col>
            <Col md={6} style={{ padding: 0 }}>
              <div className="page-container">
                {dataCollection && dataCollection.map((data) => {
                  return (
                    <CardCollection data={data}/>
                  )
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}