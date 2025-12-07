import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types/chat';
import { MessageBubble } from './MessageBubble';
import { QuickActions } from './QuickActions';
import { TypingIndicator } from './TypingIndicator';
import { AIService } from '../services/aiServices';
import { Send, Minimize2, X, ChevronDown, ChevronUp } from 'lucide-react';

interface ChatBotProps {
  isMinimized: boolean;
  onToggleMinimize: () => void;
  onClose: () => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ isMinimized, onToggleMinimize, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant for State University. I can help you with any questions about admissions, courses, faculty, fees, events, campus life, and much more. What would you like to know?',
      isBot: true,
      timestamp: new Date(),
      category: 'greeting'
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false); // Start collapsed
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const aiService = new AIService();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateResponse = async (userMessage: string): Promise<string> => {
    try {
      // Use AI service for all responses
      return await aiService.generateResponse(userMessage);
    } catch (error) {
      console.error('AI Service Error:', error);
      // Fallback response if AI service fails
      return "I apologize, but I'm having trouble processing your request right now. Please try again in a moment, or contact our support team at (555) 123-4567 for immediate assistance.";
    }
  };

  const handleSendMessage = async (messageText: string = inputText) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate realistic typing delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

    try {
      const responseText = await generateResponse(messageText);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isBot: true,
        timestamp: new Date(),
        category: 'ai-response'
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setIsTyping(false);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I encountered an error while processing your request. Please try again or contact our support team.",
        isBot: true,
        timestamp: new Date(),
        category: 'error'
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (query: string) => {
    // Auto-collapse quick actions after use
    setShowQuickActions(false);
    handleSendMessage(query);
  };

  const toggleQuickActions = () => {
    setShowQuickActions(!showQuickActions);
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={onToggleMinimize}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:shadow-xl"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)] h-[36rem] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-sm">AI University Assistant</h3>
            <p className="text-xs text-blue-100"> Online now</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleMinimize}
            className="p-1.5 hover:bg-white hover:bg-opacity-10 rounded transition-colors"
            title="Minimize chat"
          >
            <Minimize2 size={16} />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white hover:bg-opacity-10 rounded transition-colors"
            title="Close chat"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50 min-h-0">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions with Dropdown */}
      <div className="bg-white border-t border-gray-200 flex-shrink-0">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-700">Quick Actions</h3>
          <button
            onClick={toggleQuickActions}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            title={showQuickActions ? "Hide quick actions" : "Show quick actions"}
          >
            {showQuickActions ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
        
        {showQuickActions && (
          <div className="p-4">
            <QuickActions onActionClick={handleQuickAction} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4 bg-white flex-shrink-0">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about the university..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim() || isTyping}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors disabled:cursor-not-allowed"
            title="Send message"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};