import React, { Component } from 'react';
import clorisimg from './img/cloris.png';
import Home from "./comp/Home";
import Adrien from "./comp/Adrien";
import Cloris from "./comp/Cloris";
import Chat from "./comp/Chat";
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state={
            stage: 1,
            username: "",
            users: [],
            msgs: [],
            myMsg: ""
        }
        
        this.changeStage = this.changeStage.bind(this);
        
    }
    
        // changes the stage.
    changeStage(data){
        
        this.setState({
            stage: data
            
        });
    }

    
  render() {
      var m_stage = null;
      
      if(this.state.stage == 2){
          m_stage = <Adrien stage={this.state.stage} changeStage={this.changeStage}/>
      } else if (this.state.stage == 3){
          m_stage = <Cloris stage={this.state.stage} changeStage={this.changeStage}/>
      } else if (this.state.stage == 4){
          m_stage = <Chat/>
      }else {
          m_stage = <Home changeStage={this.changeStage}/>
      }
      
    return (
      <div className="App">
        <div className="stars"></div>
        <div className="twinkling"></div>
                {m_stage}
    </div>
    );
  }
}

export default App;
