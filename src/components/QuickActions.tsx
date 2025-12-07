import React from 'react';
import { QuickAction } from '../types/chat';
import { 
  GraduationCap, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Phone, 
  BookOpen,
  Users,
  Home
} from 'lucide-react';

interface QuickActionsProps {
  onActionClick: (query: string) => void;
}

const quickActions: QuickAction[] = [
  { id: '1', label: 'Admissions', query: 'What are the admission requirements?', icon: 'GraduationCap' },
  { id: '2', label: 'Tuition & Fees', query: 'What are the tuition and fees?', icon: 'DollarSign' },
  { id: '3', label: 'Course Schedule', query: 'What is the class schedule?', icon: 'Calendar' },
  { id: '4', label: 'Housing', query: 'What housing options are available?', icon: 'Home' },
  { id: '5', label: 'Campus Events', query: 'What events are happening on campus?', icon: 'Users' },
  { id: '6', label: 'Contact Info', query: 'How can I contact the college?', icon: 'Phone' },
  { id: '7', label: 'Programs', query: 'What majors and programs do you offer?', icon: 'BookOpen' },
  { id: '8', label: 'Campus Tour', query: 'How can I visit the campus?', icon: 'MapPin' },
];

const iconMap = {
  GraduationCap,
  DollarSign,
  Calendar,
  Home,
  Users,
  Phone,
  BookOpen,
  MapPin,
};

export const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {quickActions.map((action) => {
        const IconComponent = iconMap[action.icon as keyof typeof iconMap];
        return (
          <button
            key={action.id}
            onClick={() => onActionClick(action.query)}
            className="flex flex-col items-center p-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg transition-all duration-200 hover:shadow-sm group"
          >
            <IconComponent size={18} className="text-blue-600 group-hover:text-blue-700 mb-1.5" />
            <span className="text-xs text-gray-600 group-hover:text-gray-800 text-center leading-tight font-medium">
              {action.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};