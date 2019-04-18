
import React, {Component} from 'react';
  class ChatBar extends Component {
    postNewMessage = (event)=> {
      //user pushes enter to post the message
      if (event.key === 'Enter'){
        //alerts if the message field is left blank
        if (event.target.value.trim() ===""){
          alert("Can't send a blank message")
        } else {
        this.props.newMessage(event.target.value);
        event.target.value='';
        }
      }
    }
  
  createNewUsername = (event)=> {
    if (event.key === 'Enter'){
      this.props.newUsername(event.target.value);      
    }
  }
    
  render() {
    return (
      <footer className="chatbar">
      <input 
        className="chatbar-username" 
        defaultValue={this.props.user}
        id="username" 
        placeholder="type a name"
        onKeyPress={this.createNewUsername}
      />

    <input 
      className="chatbar-message" 
      defaultValue='' 
      id="message" 
      placeholder="Type a message and hit ENTER" 
      onKeyPress={this.postNewMessage}
    />

  </footer>
    )
  }
}
export default ChatBar;
