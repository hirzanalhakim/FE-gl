import React, { Component } from 'react';
import photo from "./../../assets/eating.ico";
import { Button } from 'reactstrap';

export default class CardResto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,

    }
  }
  render() {
    const { clicked } = this.state;
    console.log('this.props', this.props.data);
    console.log('clicked', clicked)
    return (
      <div className="card-list" >
        <div className={"card-photo" + ((this.props.photo) ? "" : " opacity-2")}>
          <img src={(this.props.photo) ? this.props.photo : photo} alt="patient" />
        </div>
        {this.props.cardClicked === this.props.data.resto_id &&
          <div className="card-data-right">
            <div className="patient-number" style={{marginBottom: '2px'}}>
              <Button outline size="sm" color="primary" onClick={() => console.log('+ collection')}>+ collection</Button>
            </div>
            <div><Button outline color="info" size="sm" onClick={() => console.log('open')}>Open</Button></div>
          </div>
        }
        <div className="card-data" onClick={this.props.cardClick}>
          <div className="card-name">{this.props.data && this.props.data.resto_name}</div>
          <div className="card-time">Open: {this.props.data && this.props.data.time_open.slice(0, 5)} - {this.props.data && this.props.data.time_close.slice(0, 5)}</div>
        </div>
      </div>
    )
  }
}