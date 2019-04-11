import React, {Component} from 'react';
import Message from './Message.jsx'



class MessageList extends Component {
  render() {
    // console.log(this.props);
    const messages = this.props.Messages.map ((message) =>
      <Message key={message.id} message={message} />
    );

    return (
      <main className="messages">
      {messages}
      </main>
    )   
  }
}
export default MessageList;
