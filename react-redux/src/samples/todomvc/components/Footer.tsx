import React from 'react';
import FilterLink from '../comtainers/FilterLink';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants/TodoFilters';

type Props = {
  todosCount: number,
  completedCount: number,
  onClearCompleted: () => void
}

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const Footer: React.FC<Props> = (props) => {
  const {todosCount, completedCount, onClearCompleted } = props;
  const leftCount = todosCount - completedCount;
  return (
    <footer className="footer">
    <span className="todo-count">
      <strong>{leftCount}</strong>
      <span> Items left</span>
    </span>
    <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter =>
          <li key={filter}>
            <FilterLink filter={filter}>
              {FILTER_TITLES[filter]}
            </FilterLink>
          </li>
        )}
      </ul>
      {
        completedCount > 0 &&
        <button className="clear-completed" onClick={onClearCompleted}>Clear Completed</button>
      }
    </footer>
  )
}

export default Footer;