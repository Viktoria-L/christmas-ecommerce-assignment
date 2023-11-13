import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Products from '../../pages/Products';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';


describe('Products page', () => { 
    beforeEach(() => {
        const router = createMemoryRouter(
            [{ path: "/", element: <Products /> }],
            { initialEntries: ["/"] },
          );
        render(<RouterProvider router={router} />)
    })
  
    it('should have a title heading stating "Taste the Wonder of"',() => {
        const heading: HTMLElement = screen.getByRole('heading', {name: /Taste the Wonder of/i});
        expect(heading).toBeInTheDocument();
    }) 
    it('should have a subtitle heading stating "Christmas Sweets"',() => {
        const heading: HTMLElement = screen.getByRole('heading', {name: /Christmas Sweets/i});
        expect(heading).toBeInTheDocument();
    }) 

});