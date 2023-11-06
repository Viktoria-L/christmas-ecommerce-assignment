// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import ProductInfo from '../../pages/ProductInfo';

// describe('Testing the "ProductInfo" page', () => {
//   test('The page should contain an image loaded from product.image', () => {
//     render(<ProductInfo product={{ image: 'product-image-url' }} />);
//     const productImage = screen.getByRole('img');
//     expect(productImage).toBeInTheDocument();
//     expect(productImage).toHaveAttribute('src', 'product-image-url');
//   });

//   test('The page should have a title with the product name from product.name', () => {
//     render(<ProductInfo product={{ name: 'Product Name' }} />);
//     const productTitle = screen.getByText('Product Name');
//     expect(productTitle).toBeInTheDocument();
//   });

//   test('The page should have a p-tag with text inside', () => {
//     render(<ProductInfo />);
//     const pTag = screen.getByRole('paragraph');
//     expect(pTag).toBeInTheDocument();
//     // You can add more specific checks for the text inside the p-tag if needed.
//   });

//   test('The page should have a button that says "add to basket"', () => {
//     render(<ProductInfo />);
//     const addToBasketButton = screen.getByRole('button', { name: 'add to basket' });
//     expect(addToBasketButton).toBeInTheDocument();
//   });

//   test('The page should have a span tag with the price', () => {
//     render(<ProductInfo product={{ price: 19.99 }} />);
//     const priceSpan = screen.getByText('$19.99');
//     expect(priceSpan).toBeInTheDocument();
//   });

//   test('The page should have a span tag with the text "In stock"', () => {
//     render(<ProductInfo product={{ inStock: true }} />);
//     const inStockSpan = screen.getByText('In stock');
//     expect(inStockSpan).toBeInTheDocument();
//   });
// });