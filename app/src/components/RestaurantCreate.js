import React, { Component } from "react";
import { Form } from "react-bootstrap";
import NavBarMenu from "./NavBarMenu";

export default class RestaurantCreate extends Component {
    constructor()
    {
        super();
        this.state={
            name:null,
            email:null,
            address:null,
            rating:null,
        }
    }
    create()
    {
        fetch("http://localhost:3003/restaurant",{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been added")
            })
        })
    }
render() {
    return (
      <div>
      <NavBarMenu />
        <h2>Restaurant Create</h2>
            <div className="login-form">
                <Form.Control onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurant Name"/><br/>
                <Form.Control onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurant Email"/><br/>
                <Form.Control onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Restaurant Rating"/><br/>
                <Form.Control onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Restaurant Address"/><br/>
            </div>
            <button onClick={()=>{this.create()}}>Add Restaurant</button>
      </div>
    );
  }
}
