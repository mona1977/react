import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                c_name: response.data.c_name, 
                c_phone: response.data.c_phone,
                c_address: response.data.c_address });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangePersonName(e) {
    this.setState({
      c_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      c_phone: e.target.value
    })  
  }
  onChangeGstNumber(e) {
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
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.c_name}
                      onChange={this.onChangename}
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
                      value="Update company" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}