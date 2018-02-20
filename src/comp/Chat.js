import React, { Component } from 'react';
import '../App.css';
import reactSocket from "socket.io-client";

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            mode:0,
            username: "",
            users: [],
            msgs: [],
            myMsg: ""
        }
        
        this.joinChat = this.joinChat.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleMyMsg = this.handleMyMsg.bind(this);
        this.sendChat = this.sendChat.bind(this);
    }
    
    componentDidMount(){
        //this.socket = reactSocket("http://localhost:5000");
    }
    
    joinChat(){
        this.setState({
            mode:1
        })
        this.socket = reactSocket("https://spaceworld-socket.herokuapp.com/");
//        this.socket = reactSocket("http://localhost:5000/");
        this.socket.emit("adventurername",this.state.username);
        
        this.socket.on("userList", (data)=>{
            console.log(data);
            this.setState({
                users:data
            });
            
        });
        
        this.socket.on("msgSent", (data)=>{
            console.log(data);
            this.setState({
                msgs: data
            })
            
        })
    }
    
    handleUsername(evt){
        this.setState({
            username:evt.target.value
        })
    }
    
    handleMyMsg(evt){
        this.setState({
            myMsg:evt.target.value
        })
    }
    
    sendChat(){
        var msg = this.state.username+": "+this.state.myMsg;
        this.socket.emit("sendChat", msg);
    }
    
  render() {
      
      var allAdventurers = this.state.users.map((obj,i)=>{
          return (
              <div key={i}>
              {obj}</div>
          )
      });
      
      var allChats = this.state.msgs.map((obj,i)=>{
          return (
              <div key={i}>
              {obj}</div>
          )
      });
      
      var config = null;
      
      if (this.state.mode == 0){
          
          config = (
          <div>
          <input className="TextInput-input" type="text" placeholder="Enter your name" onChange={this.handleUsername}/>
          <button className="btn" onClick={this.joinChat}>Join Chat</button>
          </div>
          )
      } else if (this.state.mode == 1){
          config =(
              <div id="chatBox">
              <div id="chatDisplay">{allChats}</div>
              <div id="controls">
              <input type="text" placeholder="Yell into the void" onChange={this.handleMyMsg}/>
              <button onClick={this.sendChat}>Send</button>
              </div>
			  <div className="allUsers">Current Adventurers:</div>
              </div>
          )
      } 
    return (
      <div className="container">
        {config}
            <div className="l_users">
            
            {allAdventurers}
        </div>
      </div>
    );
  }
}

export default App;
