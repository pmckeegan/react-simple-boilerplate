import React, {Component} from 'react';
import Message from './Message.jsx'



class MessageList extends Component {
  render() {
    const messages = this.props.Messages.map ((message) => {
      if (message.type === 'message') {
        return (<Message key={message.id} message={message} />
          )
        }
      else if(message.type === 'newUserNotification') {
        const newUsername = this.props.user;
        console.log(this.props);
        return (<div key={message.id}><h1>{message.oldUserName} has transformed into {newUsername}</h1></div>)
      }
    }
    );

    return (
      <main className="messages">
      {messages}
      </main>
    )   
  }
}
export default MessageList;
