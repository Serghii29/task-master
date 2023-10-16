import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useTodos } from '../../hooks/useTodos';
import { TabletElement } from './tablet-element.component';

export const Tablet: React.FC = React.memo(() => {
  const { data: todos } = useTodos();

  return (
    <Carousel stopAutoPlayOnHover>
      {todos?.map((todo) => (
        <TabletElement key={todo.id} todo={todo} />
      ))}
    </Carousel>
  );
});
