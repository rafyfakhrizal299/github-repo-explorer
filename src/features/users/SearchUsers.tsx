import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchUsers, fetchUserProfile } from './usersSlice';
import { fetchRepos } from '../repos/reposSlice';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import UserProfileCard from './components/UserProfileCard';
import RepoGrid from './components/RepoGrid';

const SearchUsers = () => {
  const dispatch = useAppDispatch();
  const { users, loading, userProfile } = useAppSelector((state) => state.users);
  const { repos, loading: loadingRepo } = useAppSelector((state) => state.repos);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;
  const totalPages = Math.ceil((userProfile?.public_repos || 0) / perPage);

  const handleSearch = (username: string) => {
    dispatch(fetchUsers(username));
    setSelectedUser(null);
  };

  const handleSelectUser = (username: string) => {
    dispatch(fetchRepos({ username, page: 1, perPage: 10 }));
    dispatch(fetchUserProfile(username));
    setSelectedUser(username);
  };

  useEffect(() => {
    if (selectedUser) {
      dispatch(fetchRepos({ username: selectedUser, page: currentPage, perPage }));
    }
  console.log(selectedUser)
  }, [selectedUser, currentPage]);

  const handlePageChangeFetch = (page: number) => {
    setCurrentPage(page);
  };
  console.log(selectedUser)

  return (
    <div className="p-4 space-y-4 bg-gray-50 shadow-sm dark:bg-darkcard text-gray-900 dark:text-darktext font-poppins transition-colors rounded-xl">
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col lg:flex-row gap-4 transition-all duration-300">
        <div className={`${selectedUser ? 'lg:w-1/4 w-full' : 'w-full'} transition-all`}>
          {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>) : (
            <UserList users={users} loading={loading} onSelect={handleSelectUser} />
          )}
        </div>
        {selectedUser && (
          <div key={selectedUser} 
            className="lg:w-3/4 flex flex-col gap-4 animate-fade-in transition-all duration-300">
            {userProfile && <UserProfileCard user={userProfile} />}
            <RepoGrid
              repos={repos}
              username={selectedUser}
              onPageChangeFetch={handlePageChangeFetch}
              currentPage={currentPage}
              totalPages={totalPages}
              loading={loadingRepo}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchUsers;