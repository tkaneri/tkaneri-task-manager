import { Task, TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Backend Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'DevOps Engineer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Implement User Authentication',
    description: 'Set up JWT authentication for the new API endpoints',
    status: 'in-progress',
    priority: 'high',
    assignee: teamMembers[1],
    dueDate: '2024-03-25',
    createdAt: '2024-03-18',
  },
  {
    id: '2',
    title: 'Design System Updates',
    description: 'Update component library with new design tokens',
    status: 'todo',
    priority: 'medium',
    assignee: teamMembers[0],
    dueDate: '2024-03-28',
    createdAt: '2024-03-18',
  },
  {
    id: '3',
    title: 'CI/CD Pipeline Optimization',
    description: 'Improve build times and implement caching',
    status: 'review',
    priority: 'low',
    assignee: teamMembers[2],
    dueDate: '2024-03-30',
    createdAt: '2024-03-17',
  },
];