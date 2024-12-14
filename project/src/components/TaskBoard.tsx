import React from 'react';
import { Task, TaskStatus } from '../types';
import { TaskCard } from './TaskCard';

interface TaskBoardProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}

const columns: TaskStatus[] = ['todo', 'in-progress', 'review', 'done'];

const columnTitles = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  review: 'In Review',
  done: 'Done',
};

const columnIcons = {
  todo: '📋',
  'in-progress': '⚡',
  review: '👀',
  done: '✅',
};

export function TaskBoard({ tasks, onTaskClick }: TaskBoardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {columns.map((status) => (
        <div key={status} className="task-column rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl">{columnIcons[status]}</span>
              <h2 className="font-semibold text-gray-700">{columnTitles[status]}</h2>
            </div>
            <span className="bg-white/50 text-gray-700 px-2 py-1 rounded-full text-sm backdrop-blur-sm">
              {tasks.filter(t => t.status === status).length}
            </span>
          </div>
          <div className="space-y-4 min-h-[200px]">
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <TaskCard key={task.id} task={task} onClick={onTaskClick} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}