
import React, {Component} from 'react';
  class ChatBar extends Component {
     
    postNewMessage = (event)=> {
      if (event.key === 'Enter'){
      this.props.newMessage(event.target.value);
      event.target.value='';
      console.log(event.target.value);
        }
      }
    render() {
    return (
    <footer className="chatbar">
    <form>
    {  }
        <input 
          className="chatbar-username" 
          defaultValue={this.props.user.name} 
          placeholder="Your Name (Optional)" 
        />

        <input 
          className="chatbar-message" 
          defaultValue='' 
          id="message" 
          placeholder="Type a message and hit ENTER" 
          onKeyPress={this.postNewMessage}
        />
    </form>
    </footer>
    )
  }
}
export default ChatBar;
