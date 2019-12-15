import React from 'react';

interface IProps {
  active: boolean,
  onClick: (e: React.MouseEvent) => void,
  children: React.ReactNode,
}

const Link = ({ active, children, onClick }: IProps) => (
  <button
     onClick={onClick}
     disabled={active}
     style={{
         marginLeft: '4px',
     }}
  >
    {children}
  </button>
)

export default Link;