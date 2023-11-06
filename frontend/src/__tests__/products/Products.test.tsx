// import {render, screen} from '@testing-library/react';
// import '@testing-library/jest-dom'
// import { describe } from 'node:test';
// import Products from '../../pages/Products';

// import { getAllProducts } from '../../pages/Products'; // Importera modulen som ska mockas

// jest.mock('../../pages/Products'); // Mocka modulen

// describe('Testing data fetching', () => {
//   test('Mocked data fetching', async () => {
//     // Ange hur fetchData-mocken ska returnera data
//     (getAllProducts as jest.Mock).mockResolvedValue({ data: 'mocked data' });

//     // Anropa funktionen som använder fetchData
//     const result = await getAllProducts();

//     expect(result).toEqual({ data: 'mocked data' });
//   });
// });

// describe('Product page', () => {
//     it('should show products', () => {
//         render(<Products />);
//         const heading = screen.getByRole('heading', {name: /Välkommen/i});
//         expect(heading).toBeInTheDocument();
//     })   
// })