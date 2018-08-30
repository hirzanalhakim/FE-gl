import React, { Component } from 'react';
import photo from "./../../assets/eating.ico";
import { Button } from 'reactstrap';

export default class CardCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }
  render() {
    const { clicked } = this.state;
    console.log('data', this.props.data);
    return (
      <div className="card-list" >
        <div className={"card-photo" + ((this.props.photo) ? "" : " opacity-2")}>
          <img src={(this.props.photo) ? this.props.photo : photo} alt="patient" />
        </div>
          <div className="card-data-right">
            <div className="patient-number" style={{marginBottom: '2px'}}>
              <Button outline size="sm" color="success" onClick={() => console.log('+ collection')} style={{padding: '3px', borderRadius: '13%', margin: '4px 10px 0px 0'}}>{this.props.data && this.props.data.status}</Button>
            </div>
            {/* <div><Button outline color="info" size="sm" onClick={() => console.log('open')}>Open</Button></div> */}
          </div>
        <div className="card-data" style={{padding: '20px 0'}}>
          <div className="card-name">{this.props.data && this.props.data.collection_name}</div>
          {/* <div className="card-time">Open: {this.props.data && this.props.data.time_open.slice(0, 5)} - {this.props.data && this.props.data.time_close.slice(0, 5)}</div> */}
        </div>
      </div>
    )
  }
}