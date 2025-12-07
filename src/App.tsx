import React, { useState } from 'react';
import { ChatBot } from './components/ChatBot';
import { GraduationCap, MessageCircle, Users, BookOpen, MapPin, Calendar } from 'lucide-react';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setIsChatMinimized(false);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setIsChatMinimized(false);
  };

  const handleToggleMinimize = () => {
    setIsChatMinimized(!isChatMinimized);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">State University</h1>
                <p className="text-sm text-gray-600">Excellence in Education</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Admissions</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Academics</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Student Life</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to State University
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover endless possibilities for your future. With over 80 undergraduate programs and world-class faculty, we're here to help you achieve your dreams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Apply Now
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Tour
            </button>
          </div>

          {/* AI Assistant CTA */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto border border-gray-200">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Need Help?</h3>
                <p className="text-sm text-gray-600">Ask our AI assistant anything!</p>
              </div>
            </div>
            
            <button
              onClick={handleOpenChat}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              Start Conversation
            </button>
            
            <p className="text-xs text-gray-500 mt-2">
              Get instant answers about admissions, courses, and campus life
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose State University?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">80+ Programs</h4>
              <p className="text-gray-600">Choose from a wide variety of undergraduate and graduate programs across multiple disciplines.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Expert Faculty</h4>
              <p className="text-gray-600">Learn from world-renowned professors and industry professionals who are passionate about teaching.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Beautiful Campus</h4>
              <p className="text-gray-600">Experience college life on our stunning 500-acre campus with state-of-the-art facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Events</h3>
            <p className="text-gray-600">Stay updated with what's happening at State University</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>March 15, 2024</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Spring Career Fair</h4>
              <p className="text-gray-600">Connect with top employers and explore internship opportunities at our annual career fair.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>March 20, 2024</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Open House Weekend</h4>
              <p className="text-gray-600">Join us for campus tours, information sessions, and meet with faculty and current students.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>March 25, 2024</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Research Symposium</h4>
              <p className="text-gray-600">Discover groundbreaking research from our faculty and graduate students across all disciplines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">State University</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering minds, building futures, and creating leaders for tomorrow.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Academics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Life</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campus Tours</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>123 University Ave</li>
                <li>College Town, ST 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@college.edu</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Connect With Us</h5>
              <p className="text-sm text-gray-400 mb-4">
                Follow us on social media for the latest updates and news.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 State University. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      {isChatOpen && (
        <ChatBot
          isMinimized={isChatMinimized}
          onToggleMinimize={handleToggleMinimize}
          onClose={handleCloseChat}
        />
      )}
    </div>
  );
}

export default App;