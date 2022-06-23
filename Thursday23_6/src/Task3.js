import React, { Component } from 'react';
import './App.css';

const Fruits = [
    {id: 1 , name: "Apple",  color: "Yellow"},
    {id: 2 , name: "Strawberry", color: "Red"},
    {id: 3 , name: "Kiwi", color: "Green"}
  ];

class Task3 extends Component {
constructor(props) {
    super(props);
   this.state={
        d1:"none",
        h2color:"darkgreen",
        bName:"Show",
        };
}


show=()=>{
    if (this.state.d1 == "none") {
        this.setState ({
                d1:"block",
                bName:"Hide",
        });
    }

    else {
        this.setState ({
                d1:"none",
                bName:"Show",
        });
    }
}

change=()=>{
    switch(this.state.h2color) {
        case 'darkgreen':
            this.setState ({
                h2color:"goldenrod",
            });
          break;
        case 'goldenrod':
            this.setState ({
                h2color:"orangered",
            });
          break;
          case 'orangered':
            this.setState ({
                h2color:"blue",
            });
          break;
        default:
            this.setState ({
                h2color:"darkgreen",
            });
          break;
      }
}
    render() { 
        return (
            <div className='App'>
                <button onClick={this.show}  className='fun-btn'>{this.state.bName}</button> &emsp;
                <button onClick={this.change}  className='fun-btn'>change color</button>
        <div  style={{display:this.state.d1, color:this.state.h2color}}>
                    <h4>What is React used for?<br></br>
                    React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</h4>
        </div>
        </div>
        );
    }
}

export default Task3;