import React from 'react';
import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { createForm } from '../../utils/formik';
import { StyledForm } from './form.styled';

type Props = {
  add: boolean;
  id: number | undefined;
  handleClose: () => void;
};

export const FormComponent: React.FC<Props> = ({ add, id, handleClose }) => {
  const formik = createForm(add, id);
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = formik;

  const handleOnSubmit = () => {
    handleSubmit();
    handleClose();
  };

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <TextField
        id="title"
        name="title"
        label="Title"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.title && Boolean(errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        fullWidth
      />

      <TextField
        id="description"
        name="description"
        label="Description"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.description && Boolean(errors.description)}
        helperText={touched.description && errors.description}
        fullWidth
        multiline
        rows={4}
      />

      <FormControlLabel
        control={
          <Checkbox
            id="isPublic"
            name="isPublic"
            checked={values.isPublic}
            onChange={handleChange}
            color="primary"
          />
        }
        label="Is Public"
      />

      <FormControlLabel
        control={
          <Checkbox
            id="completed"
            name="completed"
            checked={values.completed}
            onChange={handleChange}
            color="primary"
          />
        }
        label="Completed"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </StyledForm>
  );
};
