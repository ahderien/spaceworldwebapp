import React, { Component } from 'react';
import clorisimg from '../img/cloris.png';
import '../App.css';

class Cloris extends Component {
    
    constructor(props){
        super(props);
        
        this.pressLeft = this.pressLeft.bind(this);
        this.pressRight = this.pressRight.bind(this);
        
    }
    
    pressLeft(){
            
        this.props.changeStage(2)
        
    }
    
    pressRight(){
            
        this.props.changeStage(4)
        
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
					<img className="size-cloris" src={clorisimg}/>
                    </div>
			
				 <div className="columnRight">
					<h1 className="name">Cloris Qian</h1>
					<p className="intro">Cloris is an amazing robot who has been given the ability to think for herself! She loves living in Mars, and help her alien friend Adrien loot the universe.</p>
				</div>
            </div>
            	<div className="nav-right" onClick={this.pressRight}>
					<img className="arrow" src={require('../img/right.png')} />
				</div>
            </div>
            );
  }
}

export default Cloris;
