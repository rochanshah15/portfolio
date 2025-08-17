
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Toggle } from './ui/toggle';
import { cn } from '../lib/utils';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className={cn(
        "w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-500 border shadow-sm",
        "flex items-center justify-center relative overflow-hidden group",
        "hover:shadow-lg hover:scale-110 active:scale-95",
        theme === 'dark' 
          ? "bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border-gray-600 text-amber-400" 
          : "bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200 border-gray-200 text-blue-600"
      )}
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun icon for light mode */}
        <Sun 
          className={cn(
            "w-4 h-4 sm:w-5 sm:h-5 absolute transition-all duration-500 transform",
            theme === 'light' 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 rotate-180 scale-0"
          )} 
        />
        
        {/* Moon icon for dark mode */}
        <Moon 
          className={cn(
            "w-4 h-4 sm:w-5 sm:h-5 absolute transition-all duration-500 transform",
            theme === 'dark' 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-180 scale-0"
          )} 
        />
        
        {/* Animated background effect */}
        <div className={cn(
          "absolute inset-0 rounded-full transition-all duration-500",
          "bg-gradient-to-br opacity-0 group-hover:opacity-20",
          theme === 'dark' 
            ? "from-amber-400 to-orange-500" 
            : "from-blue-400 to-purple-500"
        )} />
      </div>
    </Toggle>
  );
};

export default ThemeToggle;
