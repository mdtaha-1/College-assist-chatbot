export class AIResponseGenerator {
  private responses = {
    greeting: [
      "Hello! I'm here to help you with any questions about our college. What would you like to know?",
      "Hi there! I'm your virtual assistant. How can I help you today?",
      "Welcome! I'm here to assist you with information about admissions, courses, campus life, and more. What can I help you with?"
    ],
    
    fallback: [
      "I don't have specific information about that topic in my knowledge base, but I'd be happy to help you find the right person to contact. You can reach our main office at (555) 123-4567 or email info@college.edu.",
      "That's a great question! While I don't have that specific information readily available, I recommend contacting our Student Services office at (555) 123-4567 or visiting our website's contact page for more detailed assistance.",
      "I want to make sure you get the most accurate information. For questions outside my knowledge base, please contact our admissions office at admissions@college.edu or call (555) 123-ADMIT. They'll be able to provide you with detailed, up-to-date information.",
      "I don't have that specific information, but I can help you get connected with the right department. What specific area are you most interested in learning about - admissions, academics, student life, or something else?"
    ],

    clarification: [
      "Could you provide a bit more detail about what you're looking for? That will help me give you the most relevant information.",
      "I want to make sure I understand correctly. Are you asking about admissions, courses, campus life, or something else?",
      "Could you be more specific? I have information about admissions, academics, student services, and campus life that might help."
    ],

    gratitude: [
      "You're very welcome! If you have any other questions, feel free to ask anytime.",
      "Happy to help! Don't hesitate to reach out if you need anything else.",
      "Glad I could assist! I'm here 24/7 if you have more questions."
    ]
  };

  generateResponse(query: string): string {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Check for greetings
    if (this.isGreeting(normalizedQuery)) {
      return this.getRandomResponse('greeting');
    }
    
    // Check for gratitude
    if (this.isGratitude(normalizedQuery)) {
      return this.getRandomResponse('gratitude');
    }
    
    // Check if query is too vague
    if (this.isVague(normalizedQuery)) {
      return this.getRandomResponse('clarification');
    }
    
    // Generate contextual response based on keywords
    const contextualResponse = this.generateContextualResponse(normalizedQuery);
    if (contextualResponse) {
      return contextualResponse;
    }
    
    return this.getRandomResponse('fallback');
  }

  private isGreeting(query: string): boolean {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
    return greetings.some(greeting => query.includes(greeting));
  }

  private isGratitude(query: string): boolean {
    const gratitudeWords = ['thank', 'thanks', 'appreciate', 'helpful'];
    return gratitudeWords.some(word => query.includes(word));
  }

  private isVague(query: string): boolean {
    const vague = ['help', 'info', 'information', 'tell me', 'what', 'how'];
    return query.split(' ').length <= 3 && vague.some(word => query.includes(word));
  }

  private generateContextualResponse(query: string): string | null {
    if (query.includes('admission') || query.includes('apply')) {
      return "For admissions information, you can visit our admissions office, call (555) 123-ADMIT, or check our website. I have information about requirements, deadlines, and the application process. What specific aspect of admissions interests you?";
    }
    
    if (query.includes('course') || query.includes('class') || query.includes('major')) {
      return "We offer a wide variety of courses and majors across multiple colleges. You can browse our course catalog online or speak with an academic advisor. What field of study are you interested in?";
    }
    
    if (query.includes('campus') || query.includes('housing') || query.includes('dorm')) {
      return "Our campus offers great facilities including housing, dining, recreation, and study spaces. I can provide details about specific amenities. What aspect of campus life would you like to know more about?";
    }
    
    if (query.includes('fee') || query.includes('tuition') || query.includes('cost')) {
      return "Tuition and fees vary by program and residency status. Financial aid and scholarships are available. I can provide general cost information, but for specific details, contact our Financial Aid office at (555) 123-4567.";
    }
    
    return null;
  }

  private getRandomResponse(category: keyof typeof this.responses): string {
    const responses = this.responses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  }
}