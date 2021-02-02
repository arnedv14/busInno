// import { ReactComponent } from "*.svg";
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const axios=require('axios');


class ContactForm extends Component {
  
  constructor(props) {
    super(props);
    var datum = new Date();
    datum = datum.toISOString();
    this.state = {
      ID:30,
      name: "",
      phone: "",
      mail:"",
      date:datum,
      tableNr:4,
      restaurant_ID:1      
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(sessionStorage.getItem('hasRegistered'));
    sessionStorage.setItem('hasRegistered',true);
    console.log(sessionStorage.getItem('hasRegistered'));
    console.log(this.state);

    axios.get('https://f4132480trial-dev-horecahana-srv.cfapps.eu10.hana.ondemand.com/browse/MenuItem').then(function(res){
      console.log(res);
    }).catch(function(err){
      console.log(err);
    })

    //Make call to Hana DB

    axios.post('http://localhost:4004/User/Client', this.state)
      .then(function(res){
        console.log(res);
        localStorage.setItem('hasRegistered',true);
      }).catch(function(error){
      console.log(error)
      });
    
    
  
  }
  render() {
    const { name, phone, mail, tableNr } = this.state;
    return (
      <Form onSubmit={this.submitHandler}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.changeHandler}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={this.changeHandler}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="mail"
            placeholder="mail"
            value={mail}
            onChange={this.changeHandler}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
