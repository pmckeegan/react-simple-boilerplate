
import React, {Component} from 'react';
  class ChatBar extends Component {

    postNewMessage = (event)=> {
      if (event.key === 'Enter'){
        console.log(event.target.value)
      this.props.newMessage(event.target.value);
      event.target.value='';
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
  
  {  }
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
