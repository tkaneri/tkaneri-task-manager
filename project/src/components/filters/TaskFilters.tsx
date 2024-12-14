import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Priority, TeamMember } from '../../types';

interface TaskFiltersProps {
  onSearch: (query: string) => void;
  onFilterPriority: (priority: Priority | '') => void;
  onFilterAssignee: (memberId: string | '') => void;
  teamMembers: TeamMember[];
}

export function TaskFilters({
  onSearch,
  onFilterPriority,
  onFilterAssignee,
  teamMembers,
}: TaskFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <div className="flex space-x-4">
        <div className="w-40">
          <select
            onChange={(e) => onFilterPriority(e.target.value as Priority | '')}
            className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All Priorities</option>
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>
        
        <div className="w-40">
          <select
            onChange={(e) => onFilterAssignee(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All Members</option>
            {teamMembers.map(member => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}