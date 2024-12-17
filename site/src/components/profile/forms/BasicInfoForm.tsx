import React from 'react';

interface BasicInfoFormProps {
  name: string;
  email: string;
  bio: string;
  onChange: (field: string, value: string) => void;
}

export const BasicInfoForm: React.FC<BasicInfoFormProps> = ({
  name,
  email,
  bio,
  onChange,
}) => (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        value={name}
        onChange={e => onChange('name', e.target.value)}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        value={email}
        onChange={e => onChange('email', e.target.value)}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Bio</label>
      <textarea
        value={bio}
        onChange={e => onChange('bio', e.target.value)}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        rows={3}
      />
    </div>
  </>
);