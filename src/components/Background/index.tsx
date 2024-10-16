import React, { type ReactNode } from 'react';

interface IBackgroundProps {
  children: ReactNode;
  color: string;
}

const Background = (props: IBackgroundProps) => {
  return <div className={props.color}>{props.children}</div>;
};

export default Background;
