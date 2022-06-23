import React, { Component } from 'react';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';


import './App.css';

class App extends Component {
    
  render() { 
      return (
        <>
                <div className='App'> <span className='title'>Task1 Use sort () function to render the two arrays :</span> 
                 <Task1/></div><br></br>
                <hr className='line'></hr>

                <div className='App'><span className='title'>Task2 Use map () function to render an array of object are mentioned below in a table contains from three columns (id, name, color):</span>
                <Task2/></div><br></br>
                <hr className='line'></hr>

                <div className='App'><span className='title'>Task3  Create two button to Show/Hide text and to change text color :</span>
                <Task3/></div><br></br>
        </>
      );
  }
}
export default App;








