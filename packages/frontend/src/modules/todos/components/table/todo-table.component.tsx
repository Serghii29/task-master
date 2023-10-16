import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import { Actions } from '../action';
import { StyledTableCell, StyledTableRow } from './table.styled';

export const TodoTable: React.FC = () => {
  const { data: todos = [] } = useTodos();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxHeight: '800px' }} arial-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>Todo Title</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {todos?.map((todo) => (
            <StyledTableRow key={todo.id}>
              <StyledTableCell style={{ width: '30%' }}>{todo.title}</StyledTableCell>
              <StyledTableCell>{todo.description}</StyledTableCell>
              <StyledTableCell style={{ width: '25%' }}>
                <Actions todo={todo} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
