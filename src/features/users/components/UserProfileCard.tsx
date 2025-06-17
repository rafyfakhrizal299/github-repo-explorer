import React, { ComponentType } from 'react';
import {
  IoBusinessOutline as _IoBusinessOutline,
  IoLocationOutline as _IoLocationOutline,
  IoLinkOutline as _IoLinkOutline,
} from 'react-icons/io5';

interface Props {
  user: {
    avatar_url: string;
    name: string;
    login: string;
    bio?: string;
    public_repos: number;
    followers: number;
    following: number;
    company?: string;
    location?: string;
    blog?: string;
  };
}

const UserProfileCard: React.FC<Props> = ({ user }) => {
    
    const IoBusinessOutline = _IoBusinessOutline as ComponentType<{ className?: string }>;
    const IoLocationOutline = _IoLocationOutline as ComponentType<{ className?: string }>;
    const IoLinkOutline = _IoLinkOutline as ComponentType<{ className?: string }>;
    return (
        <div className="bg-white dark:bg-darksurface border border-gray-200 dark:border-gray-700 rounded p-4 shadow-sm transition-colors">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-darktext mb-2 flex items-center gap-2">
                <img src={user.avatar_url} alt="avatar" className="w-10 h-10 rounded-full" />
                {user.name || user.login}
            </h2>
            {user.bio && (
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-1">{user.bio}</p>
            )}
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>
                    Public Repos: {user.public_repos} | Followers: {user.followers} | Following: {user.following}
                </p>
                {user.company && (
                <p className="flex items-center gap-1">
                    <IoBusinessOutline className="text-gray-500" />
                    {user.company}
                </p>
                )}
                {user.location && (
                <p className="flex items-center gap-1">
                    <IoLocationOutline className="text-gray-500" />
                    {user.location}
                </p>
                )}
                {user.blog && (
                <a
                    href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                    <IoLinkOutline className="text-blue-500" />
                    {user.blog}
                </a>
                )}
            </div>
        </div>
    );
};

export default UserProfileCard;