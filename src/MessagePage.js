import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'
import config from './config'
import axios from 'axios'

const   APP_URL = config.apiUrl

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `${APP_URL}/api/contacts`
      );
      console.log("before state", data)
      setMessages(data);
      console.log("all store properties", messages)
    }

    fetchProducts();

  }, []);

  return (
    <>
    <Sidebar/>
    <div className="col-md-9 statistics">
      <div className="card m-4 border-0 shadow">
        <div className="card-body">
          <h3 className="mb-4">Messages</h3>
          <ul className="list-group">
            {messages.map((message, index) => (
              <li key={index} className="list-group-item mb-3">
                <h5 className="mb-2 text-bold">Name:{message.name}</h5>
                <p className="mb-2">Email: {message.email}</p>
                <p className="mb-2">Subject: {message.subject}</p>
                <p className="mb-2">Message: {message.message}</p>

                <p>{message.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default MessagesPage;
