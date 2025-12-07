export class AIService {
  private readonly API_URL = 'https://api.openai.com/v1/chat/completions';
  private readonly API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  constructor() {
    // Check if API key is available
    if (!this.API_KEY) {
      console.warn('OpenAI API key not found. Using fallback responses.');
    }
  }

  async generateResponse(userMessage: string): Promise<string> {
    // If no API key, use enhanced fallback system
    if (!this.API_KEY) {
      return this.generateFallbackResponse(userMessage);
    }

    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are a helpful AI assistant for State University. You provide accurate, friendly, and informative responses about:
              
              - Admissions (requirements, deadlines, application process)
              - Academic programs (majors, courses, schedules)
              - Campus life (housing, dining, activities, events)
              - Student services (financial aid, health services, counseling)
              - Faculty and staff information
              - Tuition, fees, and financial information
              - Campus facilities and resources
              - Safety and security
              - Technology support
              
              Always be helpful, professional, and encouraging. If you don't have specific information, guide users to contact the appropriate department. Keep responses concise but informative.`
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || this.generateFallbackResponse(userMessage);
    } catch (error) {
      console.error('OpenAI API Error:', error);
      return this.generateFallbackResponse(userMessage);
    }
  }

  private generateFallbackResponse(userMessage: string): string {
    const normalizedQuery = userMessage.toLowerCase().trim();
    
    // Enhanced contextual responses based on keywords
    if (this.containsKeywords(normalizedQuery, ['admission', 'apply', 'application', 'requirements'])) {
      return "For admissions information, you'll need a high school diploma, SAT/ACT scores, and transcripts. Application deadlines are July 1st for Fall, December 1st for Spring. Contact our Admissions Office at (555) 123-ADMIT or visit admissions@college.edu for detailed requirements and to start your application process.";
    }
    
    if (this.containsKeywords(normalizedQuery, ['tuition', 'fees', 'cost', 'price', 'financial', 'money'])) {
      return "Tuition for in-state students is $12,000/year and out-of-state is $28,000/year. Additional costs include housing ($8,000), meal plans ($4,000), and fees ($800). Financial aid, scholarships, and payment plans are available. Contact Financial Aid at (555) 123-4567 for assistance.";
    }
    
    if (this.containsKeywords(normalizedQuery, ['housing', 'dorm', 'residence', 'living', 'room'])) {
      return "We offer various housing options including traditional residence halls, suite-style apartments, and family housing. Freshmen are required to live on campus. Housing applications open in February with assignments made in summer. Meal plans are required for residence hall students. Contact Housing Services for availability and applications.";
    }
    
    if (this.containsKeywords(normalizedQuery, ['course', 'class', 'major', 'program', 'degree', 'academic'])) {
      return "We offer over 80 undergraduate majors and 40 graduate programs across 8 colleges including Arts & Sciences, Business, Engineering, Education, and Health Sciences. Popular majors include Computer Science, Business Administration, Psychology, and Biology. Contact Academic Advising at (555) 123-4567 for program details.";
    }
    
    if (this.containsKeywords(normalizedQuery, ['schedule', 'calendar', 'semester', 'dates', 'time'])) {
      return "Classes run Monday-Friday from 8:00 AM to 10:00 PM. Fall and Spring semesters are 16 weeks each, with Summer sessions of 8-12 weeks. Registration opens based on credit hours completed. Check the academic calendar online or contact the Registrar's Office for specific dates.";
    }
    
    if (this.containsKeywords(normalizedQuery, ['event', 'activities', 'clubs', 'organizations', 'campus life'])) {
      return "Campus life includes over 200 student organizations, sports teams, cultural events, and academic clubs. Regular events include career fairs, guest lectures, concerts, and social activities. Check the campus events calendar online or visit the Student Activities Office to get involved.";
    }
    
    if (this.containsKeywords(normalizedQuery, ['faculty', 'professor', 'instructor', 'teacher', 'staff'])) {
      return "Our faculty includes world-renowned professors and industry professionals. You can find faculty contact information in the online directory, course syllabi, or by contacting individual departments. Office hours are posted for each instructor, and most prefer email communication.";
    }
    
    if (this.containsKeywords(normalizedQuery, ['health', 'medical', 'counseling', 'wellness', 'mental health'])) {
      return "The Student Health Center provides medical care, mental health counseling, and wellness programs. Services include routine care, vaccinations, emergency services, and health education. Counseling services are confidential and available to all students. Call (555) 123-HEALTH for appointments.";
    }
    
    if (this.containsKeywords(normalizedQuery, ['library', 'study', 'research', 'books', 'resources'])) {
      return "Our library is open 24/7 during finals week and offers extensive resources including books, databases, study rooms, and computer labs. Research assistance is available, and you can reserve study spaces online. The library also provides printing, scanning, and multimedia services.";
    }
    
    if (this.containsKeywords(normalizedQuery, ['parking', 'transportation', 'campus', 'location', 'directions'])) {
      return "Campus parking permits are required and cost $300/year. Various parking zones are available for students, faculty, and visitors. Public transportation and campus shuttle services are also available. The campus is located at 123 University Ave, College Town. Visit our website for detailed maps and directions.";
    }
    
    if (this.containsKeywords(normalizedQuery, ['wifi', 'internet', 'technology', 'computer', 'it support'])) {
      return "Free Wi-Fi is available campus-wide through the 'CollegeWiFi' network using your student credentials. Computer labs, printing services, and IT support are available. For technical issues, contact the IT Help Desk at (555) 123-HELP or visit the IT office in the Student Services Building.";
    }
    
    if (this.containsKeywords(normalizedQuery, ['safety', 'security', 'emergency', 'police'])) {
      return "Campus safety is our priority with 24/7 security patrols, emergency call boxes, and safety escort services. The campus is well-lit with security cameras throughout. Emergency procedures are provided during orientation. Report any concerns to Campus Safety at (555) 123-SAFE.";
    }
    
    // Greeting responses
    if (this.containsKeywords(normalizedQuery, ['hello', 'hi', 'hey', 'good morning', 'good afternoon'])) {
      return "Hello! I'm here to help you with any questions about State University. I can provide information about admissions, academics, campus life, student services, and much more. What would you like to know?";
    }
    
    // Gratitude responses
    if (this.containsKeywords(normalizedQuery, ['thank', 'thanks', 'appreciate'])) {
      return "You're very welcome! I'm here 24/7 to help with any questions about State University. Feel free to ask me anything else you'd like to know!";
    }
    
    // Default response for unmatched queries
    return "I'd be happy to help you with that! While I don't have specific information about your question in my immediate knowledge base, I can connect you with the right department. For general inquiries, contact our main office at (555) 123-4567 or email info@college.edu. You can also visit our website for comprehensive information about all university services and programs.";
  }

  private containsKeywords(text: string, keywords: string[]): boolean {
    return keywords.some(keyword => text.includes(keyword));
  }
}