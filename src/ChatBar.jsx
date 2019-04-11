
import React, {Component} from 'react';
  class ChatBar extends Component {
    constructor(props) {
      super(props) 
      this.state = {
          message: ''
          }
        this.updateMessage = this.updateMessage.bind(this)
    }
    updateMessage(event) {
      this.setState({
        message: event.target.value
        }
      )
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
          value={this.state.message} 
          onChange={this.updateMessage} 
          id="message" 
          placeholder="Type a message and hit ENTER" 
          onKeyPress={event => {
          if (event.key === 'Enter'){
            this.props.newMessage(this.state.message);
              }
            }
          }
        />
    </form>
    </footer>
    )
  }
}
 

export default ChatBar;
