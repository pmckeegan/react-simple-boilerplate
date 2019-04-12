import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      currentUser: {name: 'Bob'},
      messages: []
    }
    this.newMessage = this.newMessage.bind(this);
  }
//receive new message from client
  newMessage(newMessage) {
    
     const messageObject = 
        {
        username: this.state.currentUser.name,
        content: newMessage
        }
      this.socket.send(JSON.stringify(messageObject));    
  }
   //connect to server and receive messages
  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = () => {
    }; 
    this.socket.onmessage = (event) =>{
     const messageFromServer =  JSON.parse(event.data);
      console.log("message received from server", messageFromServer);
      console.log(this);
      const messageArray = this.state.messages;
      messageArray.push(messageFromServer);
      this.setState({messages: messageArray});



  }
}
  //send html
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
  //send message to server
  _sendMessage = () => {
    if (this.state.newMessage) {
      const message = { messages};
      this.socket.send(JSON.stringify(message));

      this.setState({ newMessage: "" });
    }
  };
}
export default App;