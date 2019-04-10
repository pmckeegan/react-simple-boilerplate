
import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.user.name} placeholder="Your Name (Optional)" />

        <input className="chatbar-message" defaultValue={this.props.user.content} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
export default ChatBar;

// onChange={(e) => {
//   this.setState({e.target.value})
// }} 

