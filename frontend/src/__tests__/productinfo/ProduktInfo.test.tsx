import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductInfo from '../../pages/ProductInfo';
import { MemoryRouter } from 'react-router-dom';

describe('Testing the "ProductInfo" page', () => {  
    beforeEach(() => {
        const fakeProduct = {
            id: 1,
            name: 'Title name',
            price: 12,
            description: 'Description of the product',
            image: 'picture.jpg',
            stock: 10,
        }
        render(
        <MemoryRouter>
            <ProductInfo product={fakeProduct} />
        </MemoryRouter>);
        return fakeProduct;
    }) 

  test('The page should contain an image loaded from product.image', () => {
    // render(<ProductInfo product={fakeProduct} />);
    const productImage = screen.getByRole('img');
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', 'product-image-url');
  });

  test('The page should have a title with the product name from product.name', () => {
    // render(<ProductInfo product={fakeProduct} />);
    const productTitle = screen.getByText('Product Name');
    expect(productTitle).toBeInTheDocument();
  });

  test('The page should have a p-tag with text inside', () => {
    // render(<ProductInfo product={fakeProduct} />);
    const pTag = screen.getByRole('paragraph');
    expect(pTag).toBeInTheDocument();
    // You can add more specific checks for the text inside the p-tag if needed.
  });

  test('The page should have a button that says "add to basket"', () => {
   
    const addToBasketButton = screen.getByRole('button', { name: 'add to basket' });
    expect(addToBasketButton).toBeInTheDocument();
  });

  test('The page should have a span tag with the price', () => {
    // render(<ProductInfo product={fakeProduct} />);
    const priceSpan = screen.getByText('$19.99');
    expect(priceSpan).toBeInTheDocument();
  });

  test('The page should have a span tag with the text "In stock"', () => {
    // render(<ProductInfo product={fakeProduct} />);
    const inStockSpan = screen.getByText('In stock');
    expect(inStockSpan).toBeInTheDocument();
  });
});
