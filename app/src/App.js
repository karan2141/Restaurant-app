import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Protected from "./components/Protected";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            path="/update/:id"
            render={props => <RestaurantUpdate {...props} />}
          ></Route>
          <Route path="/login" render={props => <Login {...props} />}></Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Protected exact path="/list" component={RestaurantList} />
          <Protected exact path="/create" component={RestaurantCreate} />
          <Protected exact path="/search" component={RestaurantSearch} />
          <Protected exact path="/details" component={RestaurantDetail} />
          <Protected exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
