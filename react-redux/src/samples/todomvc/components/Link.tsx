import React from 'react';
import classnames from 'classnames';

type Props = {
  active: boolean,
  children: React.ReactNode,
  setFilter: () => void,
}

const Link: React.FC<Props> = ({ active, children, setFilter}) => {
  return (
    <a className={classnames({ selected: active })}
    style={{ cursor: 'pointer' }}
    onClick={() => {
        setFilter()
      }
    }
    >
      {children}
    </a>
  )
}

export default Link;