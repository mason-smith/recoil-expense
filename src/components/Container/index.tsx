import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return <div className="container mx-auto px-4">{children}</div>;
};
