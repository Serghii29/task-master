import { Modal } from '@mui/material';
import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { BREAK_POINTS } from '../../../theme';
import { GreenHoverButton } from '../../components/action/actions.styled';
import { FormComponent } from '../../components/form';
import { Tablet } from '../../components/tablet';
import { Mobile } from '../../components/mobile';
import { TodoTable } from '../../components/table';
import { StyledTodoPage } from './todos.styled';
import { HeaderComponent } from '../../../common/components/header';
import { FilterAndSearchComponent } from '../../../common/components/filter-search';

export const TodosContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HeaderComponent />

      <StyledTodoPage>
        <FilterAndSearchComponent />

        <MediaQuery minWidth={BREAK_POINTS.tablet}>
          <TodoTable />
        </MediaQuery>

        <MediaQuery minWidth={BREAK_POINTS.mobile} maxWidth={BREAK_POINTS.tablet}>
          <Tablet />
        </MediaQuery>

        <MediaQuery maxWidth={BREAK_POINTS.mobile}>
          <Mobile />
        </MediaQuery>

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
          <FormComponent add={true as boolean} id={undefined} handleClose={handleClose} />
        </Modal>

        <GreenHoverButton onClick={handleOpen} variant="outlined">
          Add new Todo
        </GreenHoverButton>
      </StyledTodoPage>
    </>
  );
};
