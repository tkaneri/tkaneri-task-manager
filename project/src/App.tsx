import React, { useState } from 'react';
import { Header } from './components/Header';
import { TaskBoard } from './components/TaskBoard';
import { TaskModal } from './components/modals/TaskModal';
import { TaskFilters } from './components/filters/TaskFilters';
import { TaskStats } from './components/stats/TaskStats';
import { initialTasks, teamMembers } from './data/mockData';
import { Task, Priority } from './types';
import { filterTasks, generateTaskId } from './utils/taskUtils';

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<Priority | ''>('');
  const [assigneeFilter, setAssigneeFilter] = useState('');

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleNewTask = () => {
    setSelectedTask(undefined);
    setIsModalOpen(true);
  };

  const handleTaskSubmit = (taskData: Partial<Task>) => {
    if (selectedTask) {
      setTasks(tasks.map(task =>
        task.id === selectedTask.id ? { ...task, ...taskData } : task
      ));
    } else {
      const newTask: Task = {
        id: generateTaskId(),
        status: 'todo',
        createdAt: new Date().toISOString(),
        ...taskData,
      } as Task;
      setTasks([...tasks, newTask]);
    }
  };

  const filteredTasks = filterTasks(
    tasks,
    searchQuery,
    priorityFilter,
    assigneeFilter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 bg-pattern">
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />
      <Header onNewTask={handleNewTask} />
      <main className="relative max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <TaskStats tasks={tasks} />
        <TaskFilters
          onSearch={setSearchQuery}
          onFilterPriority={setPriorityFilter}
          onFilterAssignee={setAssigneeFilter}
          teamMembers={teamMembers}
        />
        <TaskBoard tasks={filteredTasks} onTaskClick={handleTaskClick} />
        <TaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleTaskSubmit}
          task={selectedTask}
        />
      </main>
    </div>
  );
}

export default App;