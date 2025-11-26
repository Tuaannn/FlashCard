
import React from 'react';
import { FileText, Presentation, Table, Monitor, Globe, Shield, Lock, Check } from 'lucide-react';
import { Course } from '../types';
import { COURSES } from '../constants';

// Map themes to Tailwind classes matching the reference image
const themeClasses = {
  blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', shadow: 'shadow-blue-200' },
  green: { bg: 'bg-emerald-500', light: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', shadow: 'shadow-emerald-200' },
  orange: { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', shadow: 'shadow-orange-200' },
  purple: { bg: 'bg-indigo-500', light: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', shadow: 'shadow-indigo-200' },
  cyan: { bg: 'bg-cyan-500', light: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', shadow: 'shadow-cyan-200' },
  rose: { bg: 'bg-rose-500', light: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', shadow: 'shadow-rose-200' },
};

interface CourseSelectorProps {
  selectedCourseId: string | null;
  onSelect: (id: string) => void;
  disabled: boolean;
}

export const CourseSelector: React.FC<CourseSelectorProps> = ({ selectedCourseId, onSelect, disabled }) => {
  
  // Reduced icon size for compact blocks
  const iconSize = 18; 

  const renderIcon = (course: Course) => {
    switch (course.id) {
      case 'word':
        return <FileText size={iconSize} className="text-white" strokeWidth={2.5} />;
      case 'excel':
        return <Table size={iconSize} className="text-white" strokeWidth={2.5} />;
      case 'ppt':
        return <Presentation size={iconSize} className="text-white" strokeWidth={2.5} />;
      case 'computer':
        return (
          <div className="relative">
            <Monitor size={iconSize} className="text-white" strokeWidth={2.5} />
            <div className="absolute top-[5px] left-[4px] flex gap-[1.5px]">
               <div className="w-[1.5px] h-[1.5px] bg-white rounded-full"></div>
               <div className="w-[1.5px] h-[1.5px] bg-white rounded-full"></div>
            </div>
          </div>
        );
      case 'ic3':
        return (
          <div className="relative">
            <Globe size={iconSize} className="text-white" strokeWidth={2} />
            <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-[0.5px]">
               <Check size={6} className="text-cyan-600" strokeWidth={4} />
            </div>
          </div>
        );
      case 'security':
        return (
           <div className="relative">
             <Shield size={iconSize} className="text-white" strokeWidth={2} />
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <Lock size={6} className="text-white fill-white/50" />
             </div>
           </div>
        );
      default:
        return <FileText size={iconSize} className="text-white" />;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 h-full content-start">
      {COURSES.map((course) => {
        const theme = themeClasses[course.theme];
        const isSelected = selectedCourseId === course.id;

        return (
          <div
            key={course.id}
            onClick={() => !disabled && onSelect(course.id)}
            className={`
              relative flex items-center p-2 rounded-xl border-2 cursor-pointer transition-all duration-200 group w-full h-14
              ${theme.light} ${theme.border}
              ${disabled ? 'opacity-50 grayscale cursor-not-allowed' : 'hover:shadow-md hover:-translate-y-0.5'}
              ${isSelected ? 'ring-1 ring-offset-0 ' + theme.border + ' shadow-sm' : 'shadow-sm'}
            `}
          >
             {/* Circular Checkbox - Smaller */}
            <div className={`
              flex-shrink-0 w-4 h-4 rounded-full border border-gray-300 bg-white mr-2 flex items-center justify-center transition-colors duration-200
              ${isSelected ? 'border-transparent' : 'group-hover:border-gray-400'}
            `}>
               {/* Inner Dot for selection */}
               {isSelected && <div className={`w-2 h-2 rounded-full ${theme.bg}`}></div>}
            </div>

            {/* Icon Box - Smaller */}
            <div className={`
              flex-shrink-0 w-8 h-8 rounded-lg ${theme.bg} shadow-sm flex items-center justify-center mr-2
              transform transition-transform duration-300
            `}>
              {renderIcon(course)}
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0 flex items-center h-full">
              {/* Compact font size */}
              <h3 className={`font-bold text-[11px] leading-tight line-clamp-2 ${theme.text}`}>
                {course.title}
              </h3>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};
