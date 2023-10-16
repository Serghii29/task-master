import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../../common/types/todo.types';
import { useDelete } from '../../hooks/useDelete';
import { useUpdate } from '../../hooks/useUpdate';
import { ContainerDiv, GreenHoverButton, GreenSwitch } from './actions.styled';
import { APP_KEYS } from '../../../common/consts';

type Props = {
  todo: ITodo;
};

export const Actions: React.FC<Props> = React.memo(({ todo }) => {
  const { id, completed } = todo;

  const navigate = useNavigate();

  const { mutate: deleteTodo } = useDelete(id);

  const { mutate: updateTodo } = useUpdate();

  const handleSwitchChange = () => {
    updateTodo([id, { completed: !completed }]);
  };

  const handleViewClick = () => {
    navigate(`/${APP_KEYS.ROUTER_KEYS.TODO}/${id}`);
  };

  const handleDeleteTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteTodo();
  };

  return (
    <ContainerDiv>
      <GreenHoverButton onClick={handleViewClick} variant="outlined">
        View
      </GreenHoverButton>

      <GreenHoverButton onClick={handleDeleteTodo} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </GreenHoverButton>

      <GreenSwitch
        checked={completed}
        onChange={handleSwitchChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </ContainerDiv>
  );
});
