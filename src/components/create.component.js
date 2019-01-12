import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangephone = this.onChangephone.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      c_name: '',
      c_phone: '',
      c_address:''
    }
  }
  onChangename(e) {
    this.setState({
      c_name: e.target.value
    });
  }
  onChangephone(e) {
    this.setState({
      c_phone: e.target.value
    })  
  }
  onChangeaddress(e) {
    this.setState({
      c_address: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      c_name: this.state.c_name,
      c_phone: this.state.c_phone,
      c_address: this.state.c_address
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      c_name: '',
      c_phone: '',
      c_address: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Company</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.c_name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Phone: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.c_phone}
                      onChange={this.onChangephone}
                      />
                </div>
                <div className="form-group">
                    <label>Address: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.c_address}
                      onChange={this.onChangeaddress}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Register Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}