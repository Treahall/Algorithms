import React, { Component } from 'react';
import axios from 'axios';

export default class AlgorithmList extends Component{
  constructor(props){
    super(props);

    this.updateData = this.updateData.bind(this);
    this.getData = this.getData.bind(this);

    this.state = {
      name: "",
      description: "",
    }
  }

  componentDidMount(){
    this.getData();
  }

  updateData(data){
    this.setState({
      name: data.name,
      description: data.description,
    })
  }

  getData(){
    axios.get('http://localhost:5000/algorithms')
      .then(res => {
        this.updateData(res.data[0]);
      })
  }
  render(){
    return(
      <div>
        <h3 style={{textAlign: "center"}}>
          {this.state.name} <br/> {this.state.description}
          </h3>
      </div>
    )
  }
}
