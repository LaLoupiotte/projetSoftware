import React, { useState } from 'react';
import { CandidateProfile as CandidateProfileType } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { EditProfileForm } from './EditProfileForm';
import { ProfileHeader } from './ProfileHeader';
import { SkillsList } from './SkillsList';
import { ExperienceList } from './ExperienceList';
import { EducationList } from './EducationList';

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
      <ProfileHeader
        name={profile.name}
        email={profile.email}
        avatar={profile.avatar}
        canEdit={canEdit}
        onEdit={() => setIsEditing(true)}
      />

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-gray-700">{profile.bio}</p>
      </div>

      <SkillsList skills={profile.skills} />
      <ExperienceList experiences={profile.experiences} />
      <EducationList education={profile.education} />
    </div>
  );
};