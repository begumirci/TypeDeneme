import { Typography } from '@mui/material';
import { TableWrapperProps, Fruits } from './types';

export const FruitsTable = ({
  inputValue,
  isProductInStock,
}: TableWrapperProps) => {
  const fruits: Fruits = [
    { id: 0, name: 'Apple', price: '1$' },
    { id: 1, name: 'Strawberry', price: '2$' },
    { id: 2, name: 'Cherry', price: '3$' },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Fruits</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <tr key={fruit.id}>
              <td>{`${fruit.name} ${fruit.price}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
