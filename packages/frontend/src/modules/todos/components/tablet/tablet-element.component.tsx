import React from 'react';
import { ITodo } from '../../types/todo.types';
import { Actions } from '../action';
import { StyledPaper } from './tablet.styled';

type Props = {
  todo: ITodo;
};

export const TabletElement: React.FC<Props> = React.memo(({ todo }) => {
  const { title, description } = todo;

  return (
    <StyledPaper>
      <h3>{title}</h3>
      <p>{description}</p>

      <Actions todo={todo} />
    </StyledPaper>
  );
});
