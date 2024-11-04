import { Dispatch, SetStateAction } from 'react';

interface IFiltersProps {
  filter: 'all' | 'active' | 'completed';
  onFilter: Dispatch<SetStateAction<'all' | 'active' | 'completed'>>;
}

export default function Filters({ filter, onFilter }: IFiltersProps) {
  return (
    <>
      <button
        className={`${
          filter === 'all' ? 'text-bright-blue' : ''
        } hover:text-very-dark-grayish-blue hover:dark:text-light-grayish-blue-dark`}
        onClick={() => onFilter('all')}
      >
        All
      </button>
      <button
        className={`${
          filter === 'active' ? 'text-bright-blue' : ''
        } hover:text-very-dark-grayish-blue hover:dark:text-light-grayish-blue-dark`}
        onClick={() => onFilter('active')}
      >
        Active
      </button>
      <button
        className={`${
          filter === 'completed' ? 'text-bright-blue' : ''
        } hover:text-very-dark-grayish-blue hover:dark:text-light-grayish-blue-dark`}
        onClick={() => onFilter('completed')}
      >
        Completed
      </button>
    </>
  );
}
