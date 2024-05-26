import { Dispatch, SetStateAction } from 'react';
import { Checkbox, TextField, Typography, Stack } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

type InputAreaProps = {
  isimler: string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isProductInStock: boolean;
  setIsProductInStock: Dispatch<SetStateAction<boolean>>;
};

export const InputArea = ({
  isimler,
  inputValue,
  setInputValue,
  isProductInStock,
  setIsProductInStock,
}: InputAreaProps) => {
  console.log(isimler);

  return (
    <Stack>
      <TextField
        label='Search Filter'
        variant='standard'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Stack
        direction='row'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Checkbox
          {...label}
          checked={isProductInStock}
          onChange={(e) => setIsProductInStock(e.target.checked)}
        />
        <Typography variant='body1' component='span'>
          Only show products in stock
        </Typography>
      </Stack>
    </Stack>
  );
};
