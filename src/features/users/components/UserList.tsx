import React from 'react';

interface Props {
  users: any[];
  onSelect: (username: string) => void;
  loading: boolean;
}

const UserList: React.FC<Props> = ({ users, onSelect, loading }) => {
  if (loading) {
    return <div className="py-12 text-center">Loading...</div>;
  }

  return (
    <ul className="space-y-2">
        {users.length === 0 ? <p className="text-gray-700 dark:text-darktext text-sm mt-1 ml-2">Nothing to display yet / No data</p> : users.map((user) => (
        <li
          key={user.id}
          className="cursor-pointer p-3 bg-white dark:bg-darksurface rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-darkbg shadow-sm transition-colors"
          onClick={() => onSelect(user.login)}
        >
          <span className="text-gray-900 dark:text-darktext font-medium">{user.login}</span>
        </li>
      ))}
    </ul>
  );
};

export default UserList;