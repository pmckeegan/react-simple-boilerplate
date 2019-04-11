import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Bob'},
      messages: []//store messages from server here.
    }
    this.newMessage = this.newMessage.bind(this);
    // this.newMessage.prepend(this.state.messages)
  }

  newMessage(newMessage) {
  const messageObject = this.state.messages;
    messageObject.push(
      {
      username: this.state.currentUser.name,
      content: newMessages
      // id: Math.floor((Math.random() * 100000) + 1)
      })
    this.setState({messages: messageObject});
    this.socket.send(JSON.stringify(messageObject));    
  }
  
  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = () => {
      console.log("Connected to ws server.");
    };  
  }

  render() {
    <App />
    return (
      <div>
        <nav className="navbar">
        <img className = "nav-image" src="./build/Flower_ICQ.png"></img>
        <h3>Not ICQ</h3>
        </nav>
        <ChatBar 
          user={this.state.currentUser} 
          newMessage={this.newMessage} 
          />

        <MessageList Messages={this.state.messages} />
      </div> 
    );
  }
  
  _sendMessage = () => {
    if (this.state.newMessage) {
      const message = { messages};
      this.socket.send(JSON.stringify(message));

      this.setState({ newMessage: "" });
    }
  };
}
export default App;