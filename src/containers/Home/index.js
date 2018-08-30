import React, { Component } from 'react';
import NavbarTop from '../../components/NavbarTop';
import CardResto from '../../components/CardResto';
import {
  Row,
  Col,
  Container
} from "reactstrap";
import { apiHost } from './../../config';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataResto: [],
      cardClicked: ''
    }
  }
  componentDidMount() {
    fetch(`${apiHost}/showresto`)
      .then((response) => response.json())
      .then((res) => {
        this.setState({ dataResto: res.data })
        console.log('res resto', res);
      })
      .catch(error => console.error('Error:', error));
  }

  cardClick = (x) => {
    if (this.state.cardClicked !== x) {
      this.setState({ cardClicked: x })
    } else {
      this.setState({ cardClicked: '' })
    }
  }

  addToCollection = () => {
    // if ()
  }


  render() {
    const { dataResto } = this.state;
    return (
      <div>
        <NavbarTop />
        <Container fluid>
          <Row>
            <Col md={3}></Col>
            <Col md={6} style={{ padding: 0 }}>
              <div className="page-container">
                {dataResto && dataResto.map((data) => {
                  return (
                    <CardResto data={data} cardClick={() => this.cardClick(data.resto_id)} cardClicked={this.state.cardClicked} onClick={console.log('aaaa')} />
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

export default Home;