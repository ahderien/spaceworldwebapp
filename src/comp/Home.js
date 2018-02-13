import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
    constructor(props){
        super(props);
        
        this.stageChange = this.stageChange.bind(this);
    }
    
    stageChange(){
        
        this.props.changeStage(2);
        
    }
    
    render() {
        return (
             <div className="container">
                <h1>Space World</h1>
            <button onClick={this.stageChange}>Push to Start</button>
            </div>
            );
  }
}

export default Home;
