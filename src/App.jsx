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
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
          id:667
        }
      ]
    }
  }
  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
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
        <h3>chat E</h3>
        {/* <img src="./build/que.gif"></img> official mascot gif */}
        </nav>
        <ChatBar user={this.state.currentUser} />
        
        <MessageList messages={this.state.messages} />
      </div> 
    );
  } 
}
export default App;
