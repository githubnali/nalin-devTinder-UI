import React, { useEffect, useState } from 'react';

import { Send } from "lucide-react";
import { useParams } from 'react-router-dom';
import { CreateSocketConnection } from '../utils/socket';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const Chat = () => {

  //get the target userID to whoom you want to chat
  const { targetUserId } = useParams();

  // get the logged in user
  const user = useSelector(store => store.user);

  //store the id of logged in user
  const userId = user?._id;

  //useState for message
  const [messages, setMessages] = useState([]);

  //useState for new messages
  const [newMessage, setNewMessage] = useState("");


  //useEffect to create a socket connection to emit the on the connection
  useEffect(() => {

    if(!user) {
      return;
    };

    const socket = CreateSocketConnection();

    //as soo as page loads, the socket connection is made and joinChat event is emitted.
    socket.emit("joinChat", {firstName: user.firstName, userId, targetUserId});

    //set the message 
    socket.on("messageReceived", ({firstName, lastName, text, profile, targetUserId}) => {
        setMessages((messages) => [...messages, {firstName, lastName, text, profile, targetUserId}])
    }) 

    return () => {
      socket.disconnect();
    }
  }, [userId, targetUserId])

  //fetch previous messages from DB through api call
  const fetchChatMessages = async () => {
    //api call
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true
    })

    // store the chat messages in new obj
    const chatMessages = chat?.data?.messages.map((msg) => {
      const {senderId, text} = msg;
      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        profile: senderId?.photoUrl,
        text
      };
    });

    //updating the messages using setMessages method
    setMessages(chatMessages);
  }

  //calling fetch messages on page loads
  useEffect(() => {
    fetchChatMessages();
  }, [])


  //send the messaged using sendMessage handler
  const sendMessage = () => {
    const socket = CreateSocketConnection();

    socket.emit('sendMessage', {firstName: user.firstName, lastName: user.lastName, userId, targetUserId, text: newMessage, profile: user.photoUrl});

    setNewMessage("");
  }

  return (
     <div className="flex flex-col h-[600px] bg-gradient-to-r from-indigo-50 to-indigo-200 w-1/2 mx-auto my-10 pb-1">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-lg font-bold px-4 py-3 shadow-md rounded-sm">
        💬 DevBuddy Chat
      </div>

      {/* Chat Conversation */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => {

          const chatPosition = user.firstName === msg.firstName ? "chat-end" : "chat-start";

          return (
            <div key={index} className={`chat ${chatPosition}`}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src={msg.profile}
                  />
                </div>
              </div>
              <div className="chat-header">
                {`${msg.firstName} ${msg.lastName}`}
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble max-w-xs px-4 py-2 rounded-2xl shadow-md text-sm bg-white text-gray-800 rounded-bl-none">{msg.text}</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
          )
        })}
      </div>

      {/* Input Section */}
      <div className="flex items-center gap-2 p-3">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-[10px] rounded-full shadow-lg transition" onClick={sendMessage}>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default Chat



