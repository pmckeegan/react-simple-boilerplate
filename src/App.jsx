import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Bob'},
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
          id: 666
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for goo.',
          id:667
        }
      ]
    }
    this.newMessage = this.newMessage.bind(this);
    // this.newMessage.prepend(this.state.messages)
  }

  newMessage(newMessage) {
    const messageObject = this.state.messages;
    messageObject.push(
      {
      username: this.state.currentUser.name,
      content: newMessage,
      id: Math.floor((Math.random() * 100000) + 1)
    })
    this.setState(this.state.messages: messageObject)    
    }
    
  componentDidMount() {
    // eslint-disable-next-line no-console
    // console.log('componentDidMount <App />');
    setTimeout(() => {
      // eslint-disable-next-line no-console
      // console.log('Simulating incoming message');
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
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
}
export default App;