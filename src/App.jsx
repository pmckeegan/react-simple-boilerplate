import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      currentUser: "anon",
      messages: [],
      peopleOnline: 0
    }
    this.newMessage = this.newMessage.bind(this);
    this.newUsername = this.newUsername.bind(this);
  }

// save new username from the client
newUsername(newUsername) { 
  
  const nameObject = 
     {
     username: newUsername,
     type: "newUserNotification",
     oldUserName: this.state.currentUser
     }
     this.setState({currentUser: newUsername})
   this.socket.send(JSON.stringify(nameObject));    
}

//receive new message from client
  newMessage(newMessage) {
    const messageObject = 
      {
      username: this.state.currentUser,
      content: newMessage,
      type: "message"
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
      const messageArray = this.state.messages;
      messageArray.push(messageFromServer);
      this.setState({messages: messageArray});
      
      if (messageFromServer.type === "clientCount") { 

      this.setState({peopleOnline: messageFromServer.clients})
      console.log("people online", this.state.peopleOnline)
      };
  }
}
  //send html
  render() {
    <App />
    return (
      <div>
        
        <nav className="navbar">
        <div> {this.state.peopleOnline} online </div>
        <img className = "nav-image" src="./build/Flower_ICQ.png"></img>
        <h3>Not ICQ</h3>
        </nav>
        <ChatBar 
          user={this.state.currentUser} 
          newMessage={this.newMessage}
          newUsername={this.newUsername} 
          />

        <MessageList 
          Messages={this.state.messages}
          user={this.state.currentUser} 
        />
      </div> 
    );
  }
  //send message to server
  _sendMessage = () => {
    if (this.state.newMessage) {
      const message = {messages};
      this.socket.send(JSON.stringify(message));
      this.setState({ newMessage: "" });
    }
  };
    //send message to server
    _senduserName = () => {
      if (this.state.currentUser) {
        const userName = {currentUser};
        this.socket.send(JSON.stringify(userName));
        // this.setState({ currentUser: "" });
      }
    };
}
export default App;