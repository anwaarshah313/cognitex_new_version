import React, { useState, useEffect, useRef } from 'react';
import { 
    // MessageCircle,
     Phone, Send, X } from 'lucide-react';
import style from './SticyIconi.module.css';

const SticyIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([
    {
      text: "Hello! How can I assist you today?",
      sender: "bot"
    }
  ]);
  const chatAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const getBotReply = () => {
    const botReplies = [
      "I understand. How can I help you with that?",
      "Let me assist you with your request.",
      "I'll be happy to help you with this matter.",
      "Could you please provide more details?",
      "I'm checking that for you now."
    ];
    return botReplies[Math.floor(Math.random() * botReplies.length)];
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("message") as HTMLInputElement;
    if (!input) return;

    const messageText = input.value.trim();
    if (messageText) {
      setMessages((prev) => [...prev, { text: messageText, sender: "user" }]);
      input.value = '';

      setTimeout(() => {
        setMessages((prev) => [...prev, { text: getBotReply(), sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <>
      <div className={style.stickyContainer}>
        {showPopup && <div className={style.backdrop} onClick={handleClosePopup}></div>}

        <button onClick={handleCardClick} className={style.stickyButton}>
          <Phone className="w-8 h-8" />
        </button>

        {/* <button onClick={toggleChat} className={`${style.stickyButton} ${style.chatButton}`}>
          <MessageCircle className="w-8 h-8" />
        </button> */}

        {isChatOpen && (
          <div className={style.chatbotWindow}>
            <div className={style.chatbotNavbar}>
              <h3 className={style.chatbotTitle}>Customer Support</h3>
              <button onClick={toggleChat} className={style.chatCloseButton}>
                <X />
              </button>
            </div>

            <div className={style.chatArea} ref={chatAreaRef}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${style.message} ${message.sender === 'bot' ? style.received : style.sent}`}
                >
                  <div className={style.messageContent}>{message.text}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className={style.inputArea}>
              <input type="text" name="message" placeholder="Type your message..." className={style.messageInput} />
              <button type="submit" className={style.sendButton}>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </div>

      {showPopup && (
        <div className={style.popup}>
          <button className={style.closeButton} onClick={handleClosePopup}>X</button>
          <iframe src="https://goag.vercel.app/" allow="microphone" className={style.iframeStyle}></iframe>
        </div>
      )}
    </>
  );
};

export default SticyIcon;