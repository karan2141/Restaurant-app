import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import {Nav,Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faSearch, faPlus, faInfo } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Restaurant App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"><FontAwesomeIcon icon={faHome}/> Home</Nav.Link>
                <Nav.Link href="/list"><FontAwesomeIcon icon={faList}/> List</Nav.Link>
                <Nav.Link href="/create"><FontAwesomeIcon icon={faPlus}/> Create</Nav.Link>
                <Nav.Link href="/search"><FontAwesomeIcon icon={faSearch}/> Search</Nav.Link>
                <Nav.Link href="/details"><FontAwesomeIcon icon={faInfo}/> Details</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/list">
            <RestaurantList />
          </Route>
          <Route path="/create">
            <RestaurantCreate />
          </Route>
          <Route path="/search">
            <RestaurantSearch />
          </Route>
          <Route path="/details">
            <RestaurantDetail />
          </Route>
          <Route path="/update/:id" render={props=>(<RestaurantUpdate {...props} />)}>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
