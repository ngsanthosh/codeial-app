import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [], // {content: 'some message', self: true}
      typedMessage: '',
    };
  }
  render() {
    const { typedMessage, messages } = this.state;

    return (
      <div className="chat-container">
        <div className="chat-header">
          Chat
          <img
            src="https://www.pinclipart.com/picdir/middle/399-3998779_minus-sign-svg-png-icon-free-download-minus.png"
            alt="None"
            height={17}
          />
        </div>
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              className={
                message.self
                  ? 'chat-bubble self-chat'
                  : 'chat-bubble other-chat'
              }
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={typedMessage}
            onChange={(e) => this.setState({ typedMessage: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Chat;
