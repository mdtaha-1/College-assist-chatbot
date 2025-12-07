export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  category?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: string;
}

export interface QuickAction {
  id: string;
  label: string;
  query: string;
  icon: string;
}