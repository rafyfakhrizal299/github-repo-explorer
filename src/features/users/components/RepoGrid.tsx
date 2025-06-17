import React, { ComponentType } from 'react';
import {
  AiOutlineStar as _AiOutlineFork,
  AiOutlineFork as _AiOutlineStar,
} from 'react-icons/ai';
import { IoEyeOutline as _IoEyeOutline, IoLogoGithub as _IoLogoGithub} from 'react-icons/io5';
import Pagination from '../../../components/common/Pagination';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  html_url: string;
}

interface Props {
  repos: Repo[];
  username: string;
  onPageChangeFetch: (page: number) => void;
  currentPage: number;
  totalPages: number;
  loading: boolean;
}

const RepoGrid: React.FC<Props> = ({ repos,
  onPageChangeFetch,
  currentPage,
  totalPages,
  loading,
 }) => {
  const IoEyeOutline = _IoEyeOutline as ComponentType<{ className?: string }>;
  const AiOutlineStar = _AiOutlineStar as ComponentType<{ className?: string }>;
  const AiOutlineFork = _AiOutlineFork as ComponentType<{ className?: string }>;
  const IoLogoGithub = _IoLogoGithub as ComponentType<{ className?: string }>;

//   const filteredRepos = repos.filter((repo) =>
//     repo.name.toLowerCase().includes(filterKeyword.toLowerCase())
//   );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChangeFetch(page);
    }
  };

  return (
    <div className="flex flex-col gap-4 max-h-[80vh]">
      {/* <input
        value={filterKeyword}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Filter repositories..."
        className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkbg text-gray-900 dark:text-darktext rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      /> */}
      {loading ? (
            <div className="flex justify-center items-center py-12">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
        <div className="overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-0 overflow-visible pb-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col justify-between h-full bg-white dark:bg-darksurface border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 hover:bg-gray-100 dark:hover:bg-darkbg transition-colors duration-200"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-darktext mb-1">{repo.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {repo.description || 'No description'}
                </p>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <div className="flex items-center gap-1">
                    <AiOutlineStar className="text-black dark:text-white" />
                    {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <AiOutlineFork className="text-black dark:text-white" />
                    {repo.forks_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <IoEyeOutline className="text-black dark:text-white" />
                    {repo.watchers_count}
                  </div>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center mt-4 bg-blue-500 dark:bg-darkprimary text-white text-sm font-medium py-2 px-4 rounded hover:brightness-110 transition flex items-center justify-center gap-2"
                >
                  <IoLogoGithub />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
        )
    } 

      
        {totalPages > 1 && (
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        )}
    </div>
  );
};

export default RepoGrid;
