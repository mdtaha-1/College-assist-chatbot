import React from 'react';
import { Message } from '../types/chat';
import { Bot, User, Clock } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}>
      <div className={`flex max-w-[85%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 ${message.isBot ? 'mr-3' : 'ml-3'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            message.isBot 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-300 text-gray-600'
          }`}>
            {message.isBot ? <Bot size={16} /> : <User size={16} />}
          </div>
        </div>
        
        <div className={`flex flex-col ${message.isBot ? 'items-start' : 'items-end'}`}>
          <div className={`px-4 py-3 rounded-2xl shadow-sm max-w-full ${
            message.isBot
              ? 'bg-white border border-gray-200 text-gray-800'
              : 'bg-blue-600 text-white'
          }`}>
            <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
              {message.text}
            </p>
            {message.category && (
              <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                {message.category}
              </span>
            )}
          </div>
          
          <div className={`flex items-center mt-1 text-xs text-gray-500 ${
            message.isBot ? 'ml-2' : 'mr-2'
          }`}>
            <Clock size={10} className="mr-1" />
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};