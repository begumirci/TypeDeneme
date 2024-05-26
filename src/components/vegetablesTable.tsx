import { Typography } from '@mui/material';
import { TableWrapperProps, FruitsOrVeggies } from './types';

export const VegetablesTable = ({
  inputValue,
  isProductInStock,
}: TableWrapperProps) => {
  const veggies: FruitsOrVeggies = [
    { id: 0, name: 'Lettuce', price: '1$', inStock: true },
    { id: 1, name: 'Tomatoes', price: '2$', inStock: true },
    { id: 2, name: 'Pickles', price: '3$', inStock: true },
  ];

  console.log(inputValue);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Veggies</th>
          </tr>
        </thead>
        <tbody>
          {veggies.map((veggy) => (
            <tr key={veggy.id}>
              <td>{`${veggy.name} ${veggy.price}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
