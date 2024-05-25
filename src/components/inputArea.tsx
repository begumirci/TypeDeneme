import { TextField } from '@mui/material';

type InputProps = 'standard' | 'outlined' | 'contained';

export const InputArea = () => {
  const input: InputProps = 'contained';

  return (
    <>
      <TextField label='erhan' variant='standard' />
      {input}
    </>
  );
};
