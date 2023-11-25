"use client"
import { useEffect, useState } from "react";
import io from "socket.io-client";
import '../styles/forms.css'
import NavbarClient from "@/components/NavbarClient";





const socket = io("http://localhost:3001");
//const socket = io("/");
<NavbarClient/>
export default function App() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [showForm, setShowForm] = useState(false);
  
    useEffect(() => {
      socket.on("message", receiveMessage)
  
      return () => {
        socket.off("message", receiveMessage);
      };
    }, []);
  
    const receiveMessage = (message) =>
      setMessages(state => [message, ...state]);
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newMessage = {
        body: message,
        from: "Me",
      };
      setMessages(state => [newMessage, ...state]);
      setMessage("");
      socket.emit("message", newMessage.body);
    };
    const handleImageClick = () => {
      setShowForm(true);
    }
  
    return (
      <section id="hero" className="d-flex align-items-center justify-content-center py-4">
         <div onClick={handleImageClick} className="h-screen bg-zinc-800 text-white flex items-center justify-center">
         <img src="/services/chat.png" alt="Imagen"
         width={100}
         height={100}
         />
         {showForm && (
        <form 
        onSubmit={handleSubmit} 
        id="espejo"
        className="card card-body border-primary rounded"
        >
          <h1 className="text-2xl font-bold my-2 text-center">Chat</h1>
          <input
            name="message"
            type="text"
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 border-zinc-500 p-2 w-full text-black"
            value={message}
            autoFocus
          />
          <button>Enviar</button>
  
          <ul className="h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <li
                key={index}
                className={`my-2 p-2 table text-sm rounded-md ${message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-black"
                  }`}
              >
                <b>{message.from}</b>:{message.body}
              </li>
            ))}
          </ul>
        </form>
         )}
      </div>

      </section>
     
  );
}