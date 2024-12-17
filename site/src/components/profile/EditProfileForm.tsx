import React from 'react';
import { CandidateProfile } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { BasicInfoForm } from './forms/BasicInfoForm';
import { SkillsForm } from './forms/SkillsForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { EducationForm } from './forms/EducationForm';

interface EditProfileFormProps {
  profile: CandidateProfile;
  onCancel: () => void;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({ profile, onCancel }) => {
  const { updateProfile } = useAuth();
  const [formData, setFormData] = React.useState({
    name: profile.name,
    email: profile.email,
    bio: profile.bio,
    skills: [...profile.skills],
    experiences: [...profile.experiences],
    education: [...profile.education]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    onCancel();
  };

  const handleBasicInfoChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <BasicInfoForm
        name={formData.name}
        email={formData.email}
        bio={formData.bio}
        onChange={handleBasicInfoChange}
      />

      <SkillsForm
        skills={formData.skills}
        onChange={skills => setFormData(prev => ({ ...prev, skills }))}
      />

      <ExperienceForm
        experiences={formData.experiences}
        onChange={experiences => setFormData(prev => ({ ...prev, experiences }))}
      />

      <EducationForm
        education={formData.education}
        onChange={education => setFormData(prev => ({ ...prev, education }))}
      />

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};