
import React, {Component} from 'react';

class ChatBar extends Component {
  render() {

    // const newMessage = (onKeyDown={(ev) => {
    //   if (ev.keyCode === '13') {
    //     this.props.addMessage(messages.value);
    //     console.log(chatbar-message);
    //   }

    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.user.name} placeholder="Your Name (Optional)" />

        <input className="chatbar-message" placeholder="Type a message and hit ENTER"   
       />
      </footer>
    );
  }
}
export default ChatBar;

// onChange={(e) => {
//   this.setState({e.target.value})
// }} 

// write handler function

