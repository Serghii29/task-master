import { Modal } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTodo } from '../../hooks/useTodo';
import { useUpdate } from '../../hooks/useUpdate';
import { GreenSwitch, GreenHoverButton } from '../action/actions.styled';
import { FormComponent } from '../form';
import { Container, Header, Title, SwitchContainer, ButtonsContainer, Text } from './todo.styled';

export const TodoElement: React.FC = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { id = '' } = useParams();
  const { data: todo } = useTodo(+id);

  const navigate = useNavigate();

  const { mutate: updateTodo } = useUpdate();

  const handleCompleted = () => {
    updateTodo([+id, { completed: !todo?.completed }]);
  };

  const handlePublic = () => {
    updateTodo([+id, { isPublic: !todo?.isPublic }]);
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <Header>{todo?.title}</Header>
      <Title>Description</Title>
      <Text>{todo?.description}</Text>

      <SwitchContainer>
        <p>Completed</p>

        <GreenSwitch
          checked={todo?.completed}
          onChange={handleCompleted}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </SwitchContainer>

      <SwitchContainer>
        <p>Private</p>

        <GreenSwitch
          checked={todo?.isPublic}
          onChange={handlePublic}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </SwitchContainer>

      <ButtonsContainer>
        <GreenHoverButton onClick={handleBack} variant="outlined">
          Back
        </GreenHoverButton>
        <GreenHoverButton onClick={handleOpen} variant="outlined">
          Edit
        </GreenHoverButton>
      </ButtonsContainer>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <FormComponent add={false} id={todo?.id} handleClose={handleClose} />
      </Modal>
    </Container>
  );
});
