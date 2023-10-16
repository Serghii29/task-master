import React from 'react';
import { ITodo } from '../../../common/types/todo.types';
import { Actions } from '../action';
import { StyledTitle, StyledDescription, ElementContainer } from './mobile.styled';

type Props = {
  todo: ITodo;
};

export const MobileElement: React.FC<Props> = React.memo(({ todo }) => {
  const { title, description } = todo;

  return (
    <ElementContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <Actions todo={todo} />
    </ElementContainer>
  );
});
