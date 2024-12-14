import { Task } from '../types';

export function generateTaskId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function filterTasks(
  tasks: Task[],
  searchQuery: string,
  priorityFilter: Task['priority'] | '',
  assigneeFilter: string
): Task[] {
  return tasks.filter(task => {
    const matchesSearch = searchQuery
      ? task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesPriority = priorityFilter ? task.priority === priorityFilter : true;

    const matchesAssignee = assigneeFilter
      ? task.assignee?.id === assigneeFilter
      : true;

    return matchesSearch && matchesPriority && matchesAssignee;
  });
}