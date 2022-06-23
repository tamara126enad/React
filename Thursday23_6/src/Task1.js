import React, { Component } from 'react';
import './App.css'

class Task1 extends Component {
     constructor(props) {
        super(props);
        this.state={
            array:[5, -2, 23, 7, 87, -42, 509]
        }
     }
    render() { 
        return (
            <> 
            <h1><span className='un'>Unsorted array [5, -2, 23, 7, 87, -42, 509]</span> <br></br>
            <span className='sort'>
                Sortedarry [             
                {this.state.array.sort()
                .map((sortNum)=>(
                    <span>{sortNum} ,</span>
                ))}
            ]</span></h1>
            </>
        );
    }
}
 
export default Task1;