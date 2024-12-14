import React from 'react';
import { Plus, Bell } from 'lucide-react';
import { Logo } from '../../assets/logo';
import { Button } from '../ui/Button';

interface HeaderProps {
  onNewTask: () => void;
}

export function Header({ onNewTask }: HeaderProps) {
  return (
    <header className="glass-effect border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Logo className="h-10 w-auto" />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-gray-900">
                DC InfoTech
              </h1>
              <span className="text-xs text-gray-500">Enhancing the Future</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button onClick={onNewTask} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Task
            </Button>
            
            <Button variant="ghost" className="p-2 rounded-full">
              <Bell className="h-6 w-6 text-gray-500" />
            </Button>
            
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