import React from 'react';
import { Edit2 } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  email: string;
  avatar: string | undefined;
  canEdit: boolean;
  onEdit: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  email,
  avatar,
  canEdit,
  onEdit,
}) => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center space-x-4">
      <img
        src={avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'}
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
    {canEdit && (
      <button
        onClick={onEdit}
        className="flex items-center text-blue-600 hover:text-blue-800"
      >
        <Edit2 className="w-5 h-5 mr-1" />
        Edit Profile
      </button>
    )}
  </div>
);