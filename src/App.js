import React , {Component} from 'react';
import Team from "./components/Team";
import Counter from "./components/counter";
import './App.css';

class App extends Component{
    render(){
return(
  <>
  <div>
  <Counter />
  </div>
<div className='container'>
<Team name='anas' lorem='Stu of Aqaba Cohort' likes='Number of likes' />
<Team name='Sara' lorem='Stu of Aqaba Cohort' likes='Number of likes' />
<Team name='Tamara' lorem='Stu of Aqaba Cohort' likes='Number of likes' />
<Team name='Saja' lorem='Stu of Aqaba Cohort' likes='Number of likes' />
</div>
</>
);
  };
};

export default App;