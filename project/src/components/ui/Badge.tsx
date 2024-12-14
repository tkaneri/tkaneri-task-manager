import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  variant: 'low' | 'medium' | 'high' | 'todo' | 'in-progress' | 'review' | 'done';
  children: React.ReactNode;
  className?: string;
}

const variants = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
  todo: 'bg-gray-100 text-gray-800',
  'in-progress': 'bg-purple-100 text-purple-800',
  review: 'bg-orange-100 text-orange-800',
  done: 'bg-green-100 text-green-800',
};

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span className={cn(
      'px-2 py-1 rounded-full text-xs font-medium',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}