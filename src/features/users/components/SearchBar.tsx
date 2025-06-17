import React, { ComponentType } from 'react';
import { useForm } from 'react-hook-form';
import { IoSearchOutline as _IoSearchOutline } from 'react-icons/io5';

interface Props {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
    
    const IoSearchOutline = _IoSearchOutline as ComponentType<{ className?: string }>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ username: string }>();

  const onSubmit = (data: { username: string }) => {
    onSearch(data.username);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full">
      <input
        {...register('username', { required: true })}
        className={`
            flex-1 px-4 py-2 text-sm bg-white dark:bg-darkbg border
            ${errors.username ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
            text-gray-900 dark:text-darktext rounded-l-full focus:outline-none focus:ring-2
            ${errors.username ? 'focus:ring-red-500' : 'focus:ring-blue-500'}
        `}
        placeholder="Search GitHub username"
      />
      <button
        type="submit"
        className={`px-4 py-2 text-sm font-medium ${errors.username ? 'bg-red-500' : 'bg-blue-500'} ${errors.username ? 'hover:bg-red-600' : 'hover:bg-blue-600 '} text-white border border-l-0 ${errors.username ? 'border-red-700' : 'hover:bg-blue-700 '}  dark:border-gray-600 rounded-r-full transition`}
      >
        <IoSearchOutline className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchBar;