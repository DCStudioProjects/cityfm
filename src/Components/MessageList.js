import React, { Component } from 'react'

const MessageList = (props) => {
    return (
        <ul className="message-list">
            {props.messages.map(message => {
                return (
                    <li key={message.id}>
                        <div>
                            {message.senderId}
                        </div>
                        <div>
                            {message.text}
                        </div>
                    </li>
                )
            })}
        </ul>
    )

}

export default MessageList