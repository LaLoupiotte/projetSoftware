import React, { useState } from 'react';
import { CandidateProfile as CandidateProfileType } from '../types';
import { CandidateProfile } from './CandidateProfile';
import { Search } from 'lucide-react';
import { users } from '../data/users';

export const RecruiterDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const candidates = users.filter((user) => user.role === 'candidate') as CandidateProfileType[];

  const filteredCandidates = candidates.filter((candidate) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      candidate.name.toLowerCase().includes(searchLower) ||
      candidate.skills.some((skill) => skill.name.toLowerCase().includes(searchLower)) ||
      candidate.bio.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, skills, or keywords..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredCandidates.map((candidate) => (
          <CandidateProfile key={candidate.id} profile={candidate} isPreview />
        ))}
      </div>
    </div>
  );
};