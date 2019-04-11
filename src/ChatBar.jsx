
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

    postNewMessage = (event)=> {
      if (event.key === 'Enter'){
      this.props.newMessage(this.state.message);
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
          onChange={this.updateMessage} 
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
