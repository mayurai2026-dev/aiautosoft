"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Package, Truck, Clock } from "lucide-react";

interface ChatSequence {
  userMessage: string;
  botResponse: {
    content: string;
    subContent?: string;
    icon?: "file" | "package" | "truck" | "clock";
  };
}

// Define only 3 commands for the demo
const chatSequences: ChatSequence[] = [
  {
    userMessage: "Ledger",
    botResponse: {
      content: "📊 Ledger Report - ABC Corp Ltd.",
      subContent: "Opening: ₹0 | Debit: ₹1,25,000 | Credit: ₹80,000 | Closing: ₹45,250",
      icon: "file"
    }
  },
  {
    userMessage: "Outstanding",
    botResponse: {
      content: "📋 Outstanding Bills: ₹45,250",
      subContent: "Bill #1234: ₹25,000 (Overdue) | Bill #1235: ₹20,250 (Due: 15 Jan)",
      icon: "clock"
    }
  },
  {
    userMessage: "Order Status",
    botResponse: {
      content: "🚚 Recent Orders: 3 pending, 5 dispatched",
      subContent: "ORD-001: Shipped via DTDC | Track: DTDC123456789",
      icon: "truck"
    }
  }
];

// WhatsApp-style double tick icons
function DoubleTick({ isRead }: { isRead: boolean }) {
  return (
    <motion.svg
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className={`w-3.5 h-3.5 ${isRead ? "text-[#53BDEB]" : "text-gray-400"}`}
      viewBox="0 0 16 15"
      fill="currentColor"
    >
      <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-1.88-1.88a.365.365 0 0 0-.517 0l-.423.423a.365.365 0 0 0 0 .516l2.673 2.673a.365.365 0 0 0 .516 0l6.072-6.273a.365.365 0 0 0-.063-.51z" />
      <path d="M11.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.666 9.879a.32.32 0 0 1-.484.033L2.302 8.032a.365.365 0 0 0-.517 0l-.423.423a.365.365 0 0 0 0 .516l2.673 2.673a.365.365 0 0 0 .516 0l6.072-6.273a.365.365 0 0 0-.063-.51z" />
    </motion.svg>
  );
}

// Typing indicator component (WhatsApp-style three dots)
function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.25 }}
      className="flex justify-start"
    >
      <div className="bg-[#DCF8C6] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[80%]">
        <div className="flex items-center gap-1">
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
            className="w-2 h-2 bg-[#075E54] rounded-full"
          />
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="w-2 h-2 bg-[#075E54] rounded-full"
          />
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="w-2 h-2 bg-[#075E54] rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}

// User message component - RIGHT side, WHITE bubble
function UserMessage({ content, isRead }: { content: string; isRead: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex justify-end"
    >
      <div className="bg-white rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm max-w-[85%] border border-gray-100">
        <p className="text-sm text-gray-800 leading-relaxed">{content}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[10px] text-gray-400">12:34</span>
          <DoubleTick isRead={isRead} />
        </div>
      </div>
    </motion.div>
  );
}

// Bot message component - LEFT side, GREEN bubble
function BotMessage({ content, subContent, icon }: {
  content: string;
  subContent?: string;
  icon?: "file" | "package" | "truck" | "clock";
}) {
  const getIcon = () => {
    switch (icon) {
      case "file":
        return <FileText className="w-4 h-4 text-[#075E54]" />;
      case "package":
        return <Package className="w-4 h-4 text-[#075E54]" />;
      case "truck":
        return <Truck className="w-4 h-4 text-[#075E54]" />;
      case "clock":
        return <Clock className="w-4 h-4 text-[#075E54]" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex justify-start"
    >
      <div className="bg-[#DCF8C6] rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm max-w-[85%]">
        <div className="flex items-start gap-2.5">
          {icon && (
            <div className="w-8 h-8 bg-[#075E54]/15 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
              {getIcon()}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#075E54] leading-relaxed">{content}</p>
            {subContent && (
              <p className="text-xs text-[#075E54]/75 mt-1.5 leading-relaxed">{subContent}</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end gap-1 mt-2">
          <span className="text-[10px] text-[#075E54]/50">12:34</span>
          <DoubleTick isRead={true} />
        </div>
      </div>
    </motion.div>
  );
}

// Message type for rendered messages
interface RenderedMessage {
  id: string;
  type: "user" | "bot";
  content: string;
  subContent?: string;
  icon?: "file" | "package" | "truck" | "clock";
  isRead: boolean;
}

export default function WhatsAppChatDemo() {
  const [messages, setMessages] = useState<RenderedMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTypingInInput, setIsTypingInInput] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isBotTyping]);

  // Mark user messages as read when bot responds
  const markMessagesAsRead = (userMsgId: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === userMsgId ? { ...msg, isRead: true } : msg
      )
    );
  };

  // Main animation loop
  useEffect(() => {
    if (currentSequenceIndex >= chatSequences.length) {
      // Reset and loop after a delay
      const resetTimeout = setTimeout(() => {
        setMessages([]);
        setCurrentSequenceIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimeout);
    }

    const sequence = chatSequences[currentSequenceIndex];

    // Phase 1: Type user message in input field
    const startTypingTimeout = setTimeout(() => {
      setIsTypingInInput(true);
      setInputText("");
      
      let charIndex = 0;
      const typingSpeed = 120; // Slower, more natural typing speed
      
      const typeInterval = setInterval(() => {
        if (charIndex < sequence.userMessage.length) {
          setInputText(sequence.userMessage.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          
          // Phase 2: Brief pause, then send message
          setTimeout(() => {
            setIsTypingInInput(false);
            
            // Add user message to chat (with grey ticks initially)
            const userMsgId = `user-${Date.now()}`;
            setMessages(prev => [...prev, {
              id: userMsgId,
              type: "user",
              content: sequence.userMessage,
              isRead: false // Grey ticks initially
            }]);
            setInputText("");
            
            // Phase 3: Show bot typing indicator after a short delay
            setTimeout(() => {
              setIsBotTyping(true);
              
              // Phase 4: Send bot response after realistic delay
              setTimeout(() => {
                setIsBotTyping(false);
                
                // Mark user message as read (turn ticks blue)
                markMessagesAsRead(userMsgId);
                
                // Add bot response to chat
                const botMsgId = `bot-${Date.now()}`;
                setMessages(prev => [...prev, {
                  id: botMsgId,
                  type: "bot",
                  content: sequence.botResponse.content,
                  subContent: sequence.botResponse.subContent,
                  icon: sequence.botResponse.icon,
                  isRead: true
                }]);
                
                // Move to next sequence after a delay
                setTimeout(() => {
                  setCurrentSequenceIndex(prev => prev + 1);
                }, 2000);
              }, 1800); // Bot typing indicator duration
            }, 600); // Delay before bot starts typing
          }, 400); // Pause after typing completes
        }
      }, typingSpeed);
      
      return () => clearInterval(typeInterval);
    }, 2000); // Initial delay before starting

    return () => clearTimeout(startTypingTimeout);
  }, [currentSequenceIndex]);

  return (
    <div className="flex flex-col h-full bg-[#ECE5DD] relative">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a3a3a3' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}
      />
      
      {/* Chat Messages Area - Fixed height with hidden scrollbar */}
      <div
        ref={chatContainerRef}
        className="flex-1 p-3 sm:p-4 space-y-3 overflow-y-auto min-h-[210px] sm:min-h-[295px] max-h-[210px] sm:max-h-[295px] relative z-10
                   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {msg.type === "user" ? (
                <UserMessage content={msg.content} isRead={msg.isRead} />
              ) : (
                <BotMessage 
                  content={msg.content} 
                  subContent={msg.subContent} 
                  icon={msg.icon} 
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Bot Typing Indicator */}
        <AnimatePresence>
          {isBotTyping && <TypingIndicator />}
        </AnimatePresence>
      </div>

      {/* Input Area with Typing Animation */}
      <div className="bg-[#F0F0F0] p-2.5 sm:p-3 border-t border-gray-200 relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm min-h-[36px] sm:min-h-[40px] flex items-center">
            {isTypingInInput ? (
              <span className="text-sm text-gray-800 flex items-center">
                {inputText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
                  className="inline-block w-0.5 h-4 bg-[#075E54] ml-0.5 rounded-full"
                />
              </span>
            ) : inputText ? (
              <span className="text-sm text-gray-800">{inputText}</span>
            ) : (
              <span className="text-sm text-gray-400">Type a message...</span>
            )}
          </div>
          <motion.div
            animate={{
              scale: inputText.length > 0 ? [1, 1.15, 1] : 1,
              backgroundColor: inputText.length > 0 || isTypingInInput ? "#25D366" : "#D1D5DB"
            }}
            transition={{ duration: 0.25 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer shadow-sm"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
