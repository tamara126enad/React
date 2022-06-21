import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'change my color',
            count:0,
            h1color: 'black',
            h2color: 'black',
        };
        }
    change =()=>{
        if ( this.state.count <=4 && this.state.count >=0) {
            this.setState({
                h2color:'red'
                });
        }
        else{
            this.setState({
                h2color:'black'
                });
        }
        this.setState({
            count:this.state.count +1, 
        })

        if (this.state.count % 2 == 0) {
            this.setState({
            h1color:'red'
            });
        }
        else{
            this.setState({
                h1color:'black'
                });
        }    
        
        
    }
    render(){
        return (
        <div className="App">
        <h1 id="title" style={{color:this.state.h1color}}>{this.state.title}</h1>
        <button onClick={this.change}>click me!</button><br></br>
        <h2><span id="count" style={{color:this.state.h2color}}>{this.state.count}</span>
        </h2></div>
        )
    }
}
export default Counter;