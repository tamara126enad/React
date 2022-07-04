import React, { Component } from 'react';
import axios from 'axios';

class Select extends Component {
constructor(props){
  super(props);
this.state={
  item:[],
  isloaded:false,
}}

componentDidMount(){
  axios.get('http://localhost/apiCrud/select.php')
  .then(res=>this.setState({item:res.data , isloaded:true}));
}
  render() { 
    const{item , isloaded} = this.state;
    return (
      <>

        {item.map((data)=>{
        return (
     <ul>
      <li>{data.id}</li>
      <li>{data.name}</li>
      <li>{data.email}</li>
      <li>{data.date}</li>
</ul>
        )
     
        })}

      </>
    );
  }
}

export default Select;