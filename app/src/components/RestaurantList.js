import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


export default class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch("http://localhost:3003/restaurant").then(response => {
      response.json().then(result => {
        this.setState({ list: result });
      });
    });
  }
  delete(id) {
    fetch("http://localhost:3003/restaurant/"+id,{
            method:"DELETE",
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been Deleted");
                this.getData();
            })
        })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Restaurant List</h1>
        {this.state.list ? (
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
                {this.state.list.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="green" /> </Link>
                    <button onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /> </button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please Wait...</p>
        )}
      </div>
    );
  }
}
