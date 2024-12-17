import { CandidateProfile, User } from '../types';

export const users: (User | CandidateProfile)[] = [
  {
    id: '1',
    email: 'sarah@example.com',
    name: 'Sarah Johnson',
    role: 'candidate',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    skills: [
      { id: '1', name: 'React' },
      { id: '2', name: 'TypeScript' },
      { id: '3', name: 'Node.js' }
    ],
    experiences: [
      {
        id: '1',
        company: 'Tech Corp',
        position: 'Senior Developer',
        startDate: '2020-01',
        endDate: 'present',
        description: 'Leading frontend development team'
      }
    ],
    education: [
      {
        id: '1',
        school: 'University of Technology',
        degree: "Master's",
        field: 'Computer Science',
        startDate: '2015',
        endDate: '2017'
      }
    ],
    bio: 'Passionate frontend developer with 5+ years of experience'
  },
  {
    id: '2',
    email: 'marc@example.com',
    name: 'Marc Dubois',
    role: 'candidate',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    skills: [
      { id: '1', name: 'Python' },
      { id: '2', name: 'Data Science' },
      { id: '3', name: 'Machine Learning' }
    ],
    experiences: [
      {
        id: '1',
        company: 'AI Solutions',
        position: 'Data Scientist',
        startDate: '2019-03',
        endDate: 'present',
        description: 'Developing ML models for client projects'
      }
    ],
    education: [
      {
        id: '1',
        school: 'École Polytechnique',
        degree: "Master's",
        field: 'Data Science',
        startDate: '2016',
        endDate: '2018'
      }
    ],
    bio: 'Data scientist specialized in machine learning applications'
  },
  {
    id: '3',
    email: 'emma@example.com',
    name: 'Emma Martinez',
    role: 'candidate',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    skills: [
      { id: '1', name: 'UX Design' },
      { id: '2', name: 'Figma' },
      { id: '3', name: 'UI Development' }
    ],
    experiences: [
      {
        id: '1',
        company: 'Design Studio',
        position: 'UX Designer',
        startDate: '2018-06',
        endDate: 'present',
        description: 'Creating user-centered digital experiences'
      }
    ],
    education: [
      {
        id: '1',
        school: 'Design Academy',
        degree: "Bachelor's",
        field: 'Digital Design',
        startDate: '2014',
        endDate: '2018'
      }
    ],
    bio: 'UX designer with a passion for creating intuitive user experiences'
  },
  {
    id: '4',
    email: 'recruiter@example.com',
    name: 'Jean Michel',
    role: 'recruiter',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
  }
];