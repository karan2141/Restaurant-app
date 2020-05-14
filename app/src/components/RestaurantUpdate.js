import React, { Component } from 'react'

export default class RestaurantUpdate extends Component {
    constructor()
    {
        super();
        this.state={
            name:null,
            email:null,
            address:null,
            rating:null,
            id:null,
        }
    }
    componentDidMount() {
        fetch("http://localhost:3003/restaurant/"+this.props.match.params.id).then(response => {
          response.json().then(result => {
            this.setState({ 
                name:result.name,
                email:result.email,
                address:result.address,
                rating:result.rating,
                id:result.id,
             });
          });
        });
      }
    update() {
        fetch("http://localhost:3003/restaurant/"+this.state.id ,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been updated")
            })
        })
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                <h2>Restaurant Update</h2>
                <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurant Name" value={this.state.name}/><br/><br/>
                    <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurant Email" value={this.state.email}/><br/><br/>
                    <input onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Restaurant Rating" value={this.state.rating}/><br/><br/>
                    <input onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Restaurant Address" value={this.state.address}/><br/><br/>
                    <button onClick={()=>{this.update()}}>Update Restaurant</button>
                </div>
            </div>
        )
    }
}
