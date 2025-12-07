import { FAQ } from '../types/chat';

export const faqs: FAQ[] = [
  // Admissions
  {
    id: 'adm-1',
    question: 'What are the admission requirements?',
    answer: 'Admission requirements vary by program. Generally, you need a high school diploma or equivalent, SAT/ACT scores, transcripts, letters of recommendation, and a personal statement. International students need TOEFL/IELTS scores. Specific GPA requirements range from 2.5-3.5 depending on the program.',
    keywords: ['admission', 'requirements', 'apply', 'application', 'entrance', 'eligibility'],
    category: 'admissions'
  },
  {
    id: 'adm-2',
    question: 'When are the application deadlines?',
    answer: 'Application deadlines are: Fall Semester - July 1st, Spring Semester - December 1st, Summer Session - April 1st. Early admission deadlines are one month earlier. Priority scholarship consideration requires applications by March 1st for fall admission.',
    keywords: ['deadline', 'application', 'when', 'date', 'due', 'submit'],
    category: 'admissions'
  },
  {
    id: 'adm-3',
    question: 'How do I apply for financial aid?',
    answer: 'Complete the Free Application for Federal Student Aid (FAFSA) at fafsa.gov. Our school code is 001234. Apply by March 1st for priority consideration. You may also apply for institutional scholarships through our scholarship portal. Work-study programs and emergency grants are available.',
    keywords: ['financial aid', 'fafsa', 'scholarship', 'money', 'funding', 'tuition help'],
    category: 'admissions'
  },
  
  // Courses & Academics
  {
    id: 'course-1',
    question: 'What majors and programs do you offer?',
    answer: 'We offer over 80 undergraduate majors and 40 graduate programs across 8 colleges: Arts & Sciences, Business, Engineering, Education, Health Sciences, Agriculture, Law, and Medicine. Popular majors include Computer Science, Business Administration, Psychology, Biology, and Engineering.',
    keywords: ['major', 'program', 'degree', 'study', 'courses', 'academic'],
    category: 'academics'
  },
  {
    id: 'course-2',
    question: 'How do I register for classes?',
    answer: 'Register through the student portal during your assigned registration period. Check with your academic advisor first. Priority registration is based on credit hours completed. Add/drop period is the first week of classes. Late registration incurs additional fees.',
    keywords: ['register', 'classes', 'enrollment', 'schedule', 'course registration'],
    category: 'academics'
  },
  {
    id: 'course-3',
    question: 'What is the class schedule?',
    answer: 'Classes run Monday-Friday, 8:00 AM - 10:00 PM. Saturday classes are available for some programs. Fall/Spring semesters are 16 weeks, Summer sessions are 8-12 weeks. Finals week follows the last week of classes. Course schedules are available online.',
    keywords: ['schedule', 'time', 'class times', 'semester', 'calendar'],
    category: 'academics'
  },

  // Faculty & Staff
  {
    id: 'faculty-1',
    question: 'How can I contact my professors?',
    answer: 'Professor contact information is available in the course syllabus and online directory. Most professors prefer email communication. Office hours are posted on course syllabi. The faculty directory includes office locations, phone numbers, and email addresses.',
    keywords: ['professor', 'faculty', 'contact', 'office hours', 'instructor'],
    category: 'faculty'
  },
  {
    id: 'faculty-2',
    question: 'Who is my academic advisor?',
    answer: 'Your academic advisor is assigned based on your major. Check the student portal or contact the Academic Advising Center at (555) 123-4567. Advisors help with course planning, degree requirements, and academic policies. Schedule appointments through the online system.',
    keywords: ['advisor', 'academic advisor', 'counselor', 'guidance', 'degree planning'],
    category: 'faculty'
  },

  // Fees & Finances
  {
    id: 'fee-1',
    question: 'What are the tuition and fees?',
    answer: 'Tuition for in-state students: $12,000/year, out-of-state: $28,000/year. Additional fees include housing ($8,000), meal plans ($4,000), parking ($300), and student activities ($500). Graduate tuition varies by program. Payment plans are available.',
    keywords: ['tuition', 'fees', 'cost', 'price', 'money', 'payment'],
    category: 'finances'
  },
  {
    id: 'fee-2',
    question: 'When is tuition due?',
    answer: 'Tuition is due by the first day of classes each semester. Payment plans allow installments. Late payment fees apply after the due date. Financial aid recipients may have different deadlines. Check your student account online for exact amounts and due dates.',
    keywords: ['payment', 'due date', 'when pay', 'tuition due', 'bill'],
    category: 'finances'
  },

  // Events & Activities
  {
    id: 'event-1',
    question: 'What events are happening on campus?',
    answer: 'Check the campus events calendar online for current activities. Regular events include career fairs, guest lectures, concerts, sports games, and student organization activities. Homecoming is in October, Spring Fest in April. Follow us on social media for updates.',
    keywords: ['events', 'activities', 'calendar', 'happening', 'campus life'],
    category: 'events'
  },
  {
    id: 'event-2',
    question: 'How do I join student organizations?',
    answer: 'Attend the Student Organization Fair during the first week of classes. Browse organizations online through the student portal. Most groups welcome new members year-round. Contact the Student Activities Office for more information. Over 200 clubs and organizations are available.',
    keywords: ['clubs', 'organizations', 'join', 'student groups', 'activities'],
    category: 'events'
  },

  // Campus Life
  {
    id: 'campus-1',
    question: 'What housing options are available?',
    answer: 'Housing options include traditional residence halls, suite-style apartments, and family housing. Freshman are required to live on campus. Housing applications open in February. Room assignments are made in summer. Meal plans are required for residence hall students.',
    keywords: ['housing', 'dorms', 'residence halls', 'apartments', 'living'],
    category: 'campus'
  },
  {
    id: 'campus-2',
    question: 'Where can I eat on campus?',
    answer: 'Dining options include the main dining hall, student union food court, campus cafes, and convenience stores. Meal plans are available for commuter students. Special dietary needs can be accommodated. Food trucks visit campus regularly.',
    keywords: ['food', 'dining', 'cafeteria', 'meal plans', 'eat', 'restaurants'],
    category: 'campus'
  },
  {
    id: 'campus-3',
    question: 'What facilities are available?',
    answer: 'Campus facilities include the library, recreation center, computer labs, study rooms, health center, counseling services, career center, and parking areas. The library is open 24/7 during finals. The rec center includes a gym, pool, and fitness classes.',
    keywords: ['facilities', 'library', 'gym', 'recreation', 'health center', 'services'],
    category: 'campus'
  },

  // Technical Support
  {
    id: 'tech-1',
    question: 'How do I access Wi-Fi on campus?',
    answer: 'Connect to "CollegeWiFi" network using your student ID and password. Guest Wi-Fi is available for visitors. IT Help Desk provides technical support at (555) 123-HELP. VPN access is available for off-campus students.',
    keywords: ['wifi', 'internet', 'network', 'password', 'connection'],
    category: 'technical'
  },
  {
    id: 'tech-2',
    question: 'How do I reset my student portal password?',
    answer: 'Use the "Forgot Password" link on the login page or contact the IT Help Desk at (555) 123-HELP. You can also visit the IT office in the Student Services Building. Bring your student ID for verification.',
    keywords: ['password', 'reset', 'login', 'portal', 'account'],
    category: 'technical'
  },

  // Health & Safety
  {
    id: 'health-1',
    question: 'What health services are available?',
    answer: 'The Student Health Center provides medical care, counseling services, and wellness programs. Services include routine care, vaccinations, mental health counseling, and health education. Emergency services are available 24/7. Insurance is accepted.',
    keywords: ['health', 'medical', 'counseling', 'wellness', 'doctor', 'mental health'],
    category: 'health'
  },
  {
    id: 'safety-1',
    question: 'How safe is the campus?',
    answer: 'Campus safety is our priority. We have 24/7 security patrols, emergency call boxes, and a safety escort service. The campus is well-lit with security cameras. Safety training and emergency procedures are provided. Report any concerns to Campus Safety at (555) 123-SAFE.',
    keywords: ['safety', 'security', 'emergency', 'police', 'safe', 'crime'],
    category: 'safety'
  }
];