// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import Products from '../../pages/Products';
// import { MemoryRouter } from 'react-router-dom';


// describe('Testing the "Products" page', () => { 

  
//     it('should render a div element',() => {
//         render(
//             <MemoryRouter>
//                 <Products />
//             </MemoryRouter>)
//         const div = screen.getByRole('div')
//         expect(div).toBeInTheDocument();
//     })
// });

// describe('Products page', () => {
//     it('should have a heading stating "Taste the Wonder of Christmas Sweets"', () => {
//       // Arrange...
//       render(<Products />);
//       // Act...
//       const heading = screen.getByRole('heading', {name: /"Taste the Wonder of Christmas Sweets"/i});
//       // Assert...
//       expect(heading).toBeInTheDocument();
//         });
//     });

  
// describe('Product info should have a button for adding and removing to shopping cart', () => {
//       it('should have a button with the text Add to cart', () => {
//         render(<Products />);
//         const button = screen.getByRole('button', { name: /Add to cart/i });

//         expect(button).toBeInTheDocument();
//       });
  
//       it('the button should be red', () => {
//         // Arrange...
//         render(<Products />);
//         const button = screen.getByRole('button', { name: /Add to cart/i });
//         expect(button).toHaveStyle({ 'background-color': 'red' });
       
//       });
  
//       it('the button should change background to gray when clicked', () => {
//         // Arrange...
//         render(<Products />);
//         // Act...
//         const button = screen.getByRole('button', { name: /Add to cart/i });
//         fireEvent.click(button);
  
//         expect(button).toHaveStyle({ 'background-color': 'gray' });
//       });
  
     
//   });