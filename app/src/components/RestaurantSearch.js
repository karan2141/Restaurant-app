import React, { Component } from "react";
import { Table, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      Data: true,
      lastSearch: ""
    };
  }
  search(key) {
    this.setState({ lastSearch: key });
    fetch("http://localhost:3003/restaurant?q=" + key).then(data => {
      data.json().then(result => {
        if (result.length > 0) {
          this.setState({ searchData: result });
          this.setState({ Data: true });
        } else {
          this.setState({ Data: false });
          this.setState({ searchData: null });
        }
      });
    });
  }
  delete(id) {
    fetch("http://localhost:3003/restaurant/" + id, {
      method: "DELETE"
    }).then(result => {
      result.json().then(resp => {
        alert("Restaurant has been Deleted");
        this.search(this.state.lastSearch);
      });
    });
  }
  render() {
    return (
      <div>
        <h2>Restaurant Search</h2>
        <Container>
          <Form.Control
            type="text"
            onChange={event => this.search(event.target.value)}
            placeholder="Search Restaurant"
          />
          <br/>
          {this.state.searchData ? (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.no.</th>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.searchData.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.rating}</td>
                      <td>{item.address}</td>
                      <td>{item.email}</td>
                      <td>
                        <Link to={"/update/" + item.id}>
                          <FontAwesomeIcon icon={faEdit} color="green" />{" "}
                        </Link>
                        <button onClick={() => this.delete(item.id)}>
                          <FontAwesomeIcon icon={faTrash} color="red" />{" "}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <p> </p>
          )}
          {this.state.Data ? null : (
            <h3 className="search-list">No Data found.</h3>
          )}
        </Container>
      </div>
    );
  }
}
