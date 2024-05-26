import { Typography } from '@mui/material';
import { TableWrapperProps, FruitsOrVeggies } from './types';

export const FruitsTable = ({
  inputValue,
  isProductInStock,
}: TableWrapperProps) => {
  const fruits: FruitsOrVeggies = [
    { id: 0, name: 'Apple', price: '1$', inStock: true },
    { id: 1, name: 'Strawberry', price: '2$', inStock: true },
    { id: 2, name: 'Cherry', price: '3$', inStock: true },
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
          {fruits.map((fruit) => {
            if (fruit.name.toLowerCase().includes(inputValue.toLowerCase()))
              return (
                <tr key={fruit.id}>
                  <td>{`${fruit.name} ${fruit.price}`}</td>
                </tr>
              );
            else <></>;
          })}
        </tbody>
      </table>
    </>
  );
};
