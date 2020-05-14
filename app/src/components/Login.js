import React, { Component } from "react";
import { Form } from "react-bootstrap";
import NavBarMenu from "./NavBarMenu";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: ""
    };
  }
  login() {
    fetch("http://localhost:3003/login?q=" + this.state.name).then(data => {
      data.json().then(result => {
        if (result.length > 0) {
          localStorage.setItem("login", JSON.stringify(result))
          console.log(this.props.history.push("list"));
        } else {
          alert("Please check username and password");
        }
      });
    });
  }
  render() {
    return (
      <div>
      <NavBarMenu />
        <h2>Login Page</h2>
        <div className="login-form">
          <Form.Control
            type="text"
            name="user"
            onChange={event => this.setState({ name: event.target.value })}
            placeholder="enter name"
          />
          <br />
          <Form.Control
            type="password"
            name="password"
            onChange={event => this.setState({ passwords: event.target.value })}
            placeholder="enter password"
          />
          <br />
        </div>
        <button onClick={() => this.login()}>Login</button>
      </div>
    );
  }
}
