import React, {Component} from 'react';
import Message from './Message.jsx'


//display messages in the main message window
class MessageList extends Component {
  render() {
    const messages = this.props.Messages.map ((message) => {
      if (message.type === 'message') {
        return (<Message key={message.id} message={message} />
        )
      }
      else if(message.type === 'newUserNotification') {
        // eslint-disable-next-line no-console
        console.log('new username ', message);
        const newUsername = message.username;
        return (<div key={message.id}><h3>{message.oldUserName} has transformed into {newUsername}</h3></div>)
      }
    });

    return (
      <main className="messages">
      <h3>Welcome to not ICQ. Type a message or enter a user name to begin!</h3>
      {messages}
      </main>
    )   
  }
}
export default MessageList;
