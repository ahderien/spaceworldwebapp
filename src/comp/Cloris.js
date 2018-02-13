import React, { Component } from 'react';
import clorisimg from '../img/cloris.svg';
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
                <div className="nav-left" onClick={this.pressLeft}>⥽</div>
                <div className="inner">
                    <div><center><img className="size-cloris" src={clorisimg}/></center>
                    <h1>Cloris Qian</h1>
                    Cloris is an amazing robot who has been given the ability to think for herself!  She loves to design and create, and help her alien friend Adrien loot he universe.
                </div>
            </div>
            <div className="nav-right" onClick={this.pressRight}>⥼</div>
            </div>
            );
  }
}

export default Cloris;
