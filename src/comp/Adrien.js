import React, { Component } from 'react';
import adrienimg from '../img/adrien.png';
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
            <div className="nav-left" onClick={this.pressLeft}>
			<img  className="arrow" src={require('../img/left.png')} />
			</div>
            <div className="inner">
				<div className="columnLeft">
					<h1 className="hello">HELLO! I AM</h1>
					<img className="size-adrien" src={adrienimg}/>
				</div>
			
				 <div className="columnRight">
					<h1 className="name">Adrien Wiebe</h1>
					<p className="intro">Adrien is a clever pirate from space who is learning to make cool websites at D3!  Also, looting the universe.</p>
				</div>
            </div>
				<div className="nav-right" onClick={this.pressRight}>
					<img className="arrow" src={require('../img/right.png')} />
				</div>
        </div>
            );
  }
}

export default Adrien;
