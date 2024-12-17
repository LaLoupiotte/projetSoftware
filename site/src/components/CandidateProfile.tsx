import React, { useState } from 'react';
import { CandidateProfile as CandidateProfileType } from '../types';
import { Calendar, Building2, GraduationCap, Edit2 } from 'lucide-react';
import { EditProfileForm } from './EditProfileForm';
import { useAuth } from '../contexts/AuthContext';

interface Props {
  profile: CandidateProfileType;
  isPreview?: boolean;
}

export const CandidateProfile: React.FC<Props> = ({ profile, isPreview }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();
  const canEdit = !isPreview && user?.id === profile.id;

  if (isEditing && canEdit) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <EditProfileForm 
          profile={profile} 
          onCancel={() => setIsEditing(false)} 
        />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <img
            src={profile.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'}
            alt={profile.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        </div>
        {canEdit && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Edit2 className="w-5 h-5 mr-1" />
            Edit Profile
          </button>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-gray-700">{profile.bio}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill.id}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <Building2 className="w-5 h-5 mr-2" />
          Experience
        </h3>
        {profile.experiences.map((exp) => (
          <div key={exp.id} className="mb-4">
            <h4 className="font-medium">{exp.position}</h4>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">
              {exp.startDate} - {exp.endDate}
            </p>
            <p className="text-gray-700 mt-1">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <GraduationCap className="w-5 h-5 mr-2" />
          Education
        </h3>
        {profile.education.map((edu) => (
          <div key={edu.id} className="mb-4">
            <h4 className="font-medium">{edu.school}</h4>
            <p className="text-gray-600">
              {edu.degree} in {edu.field}
            </p>
            <p className="text-sm text-gray-500">
              {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};