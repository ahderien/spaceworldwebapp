import React, { Component } from 'react';
import adrienimg from '../img/adrien.svg';
import '../App.css';

class Adrien extends Component {
    constructor(props){
        super(props);
        
        this.pressLeft = this.pressLeft.bind(this);
        this.pressRight = this.pressRight.bind(this);
        
    }
    
    pressLeft(){
            
        this.props.changeStage(4)
        
    }
    
    pressRight(){
            
        this.props.changeStage(3)
        
    }
    
    render() {
        return (
            <div className="container">
            <div className="nav-left" onClick={this.pressLeft}>⥽</div>
            <div className="inner">
             <div>
                <center><img className="size-adrien" src={adrienimg}/></center>
            <h1>Adrien Wiebe</h1>
            Adrien is a clever pirate from space who is learning to make cool websites at D3!  Also, looting the universe.
            </div>
            </div>
            <div className="nav-right" onClick={this.pressRight}>⥼</div>
        </div>
            );
  }
}

export default Adrien;
