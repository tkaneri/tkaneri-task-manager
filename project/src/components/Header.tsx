import React from 'react';
import { Layout, Plus, Bell } from 'lucide-react';

interface HeaderProps {
  onNewTask: () => void;
}

export function Header({ onNewTask }: HeaderProps) {
  return (
    <header className="glass-effect border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Layout className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-xl font-semibold text-gray-900">
              DC Info Tech Task Manager
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={onNewTask}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/30 transition-all duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Task
            </button>
            
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Bell className="h-6 w-6 text-gray-500" />
            </button>
            
            <img
              className="h-8 w-8 rounded-full ring-2 ring-white/30"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
              alt="User avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
}