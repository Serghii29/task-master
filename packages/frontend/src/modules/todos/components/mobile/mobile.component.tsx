import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import { MobileElement } from './mobile-element.component';
import { MobileContainer } from './mobile.styled';

export const Mobile: React.FC = () => {
  const { data: todos } = useTodos();

  return (
    <MobileContainer>
      {todos?.map((todo) => (
        <MobileElement key={todo.id} todo={todo} />
      ))}
    </MobileContainer>
  );
};
