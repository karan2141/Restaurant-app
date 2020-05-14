import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faHome,
  faSearch,
  faPlus,
  faInfo,
  faUser,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

export default class NavBarMenu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Restaurant App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
              <Nav.Link href="/list">
                <FontAwesomeIcon icon={faList} /> List
              </Nav.Link>
              <Nav.Link href="/create">
                <FontAwesomeIcon icon={faPlus} /> Create
              </Nav.Link>
              <Nav.Link href="/search">
                <FontAwesomeIcon icon={faSearch} /> Search
              </Nav.Link>
              <Nav.Link href="/details">
                <FontAwesomeIcon icon={faInfo} /> Details
              </Nav.Link>
              {localStorage.getItem("login") ? (
                <Nav.Link href="/logout">
                  <FontAwesomeIcon icon={faArrowLeft} /> Logout
                </Nav.Link>
              ) : (
                <Nav.Link href="/login">
                  <FontAwesomeIcon icon={faUser} /> Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
