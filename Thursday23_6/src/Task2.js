import React, { Component } from 'react';
import './App.css';

const Fruits = [
    {id: 1 , name: "Apple",  color: "Yellow"},
    {id: 2 , name: "Strawberry", color: "Red"},
    {id: 3 , name: "Kiwi", color: "Green"}
  ];


class Task2 extends Component {
    render() { 
        return (
            <div className='table'>
        <table className='array'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Color</th>
            </tr></thead>
        
            {Fruits.map((fruit)=>(<tr>
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
                <td>{fruit.color}</td>
            </tr>))}
        </table>
        </div>
        );
    }
}

export default Task2;