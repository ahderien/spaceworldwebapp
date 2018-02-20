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
				<div className="logoWrapper">
                <img className="logo" src={require('../img/logo.png')} />
				<button className="btn" onClick={this.stageChange}>Start My Adventure</button>
                <img className="planet" src={require('../img/planet.png')} />
				
				</div>
       			
            </div>
            );
  }
}

export default Home;
