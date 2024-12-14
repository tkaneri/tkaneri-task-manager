import { Task, TaskStats } from '../types/task';
import { isOverdue } from './date';

export function calculateTaskStats(tasks: Task[]): TaskStats {
  return {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'done').length,
    urgent: tasks.filter(t => t.priority === 'high' && t.status !== 'done').length,
    overdue: tasks.filter(t => isOverdue(t.dueDate) && t.status !== 'done').length,
  };
}

export function generateTaskId(): string {
  return `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function filterTasks(
  tasks: Task[],
  searchQuery: string,
  priorityFilter: Task['priority'] | '',
  assigneeFilter: string
): Task[] {
  return tasks.filter(task => {
    const matchesSearch = !searchQuery || 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPriority = !priorityFilter || task.priority === priorityFilter;
    const matchesAssignee = !assigneeFilter || task.assignee?.id === assigneeFilter;

    return matchesSearch && matchesPriority && matchesAssignee;
  });
}