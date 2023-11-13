import { render, screen, fireEvent } from "@testing-library/react";
import ProductDetail from "../../components/ProductDetail";
import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import CartProvider from "../../utils/context/cartContext";
import { ProductInfo } from "../../models/productModels";

const fakeProduct: ProductInfo = {    
    "id": 6,
    "name": "Holiday Macaroon Medley",
    "price": 80,
    "weight": 150,
    "description": "Indulge in the delightful flavors of the season with our Holiday Macaroon Medley. These exquisite macaroons are a delightful blend of festive colors and exquisite tastes. Each macaroon is carefully crafted to capture the spirit of Christmas with flavors like cranberry, white chocolate, and gingerbread. These Holiday Macaroons are perfect for adding a touch of elegance to your holiday celebrations or as a delightful gift for loved ones. Experience the magic of the holidays with these charming and delectable treats.",
    "image": "http://localhost:3000/macaroons.jpg",
    "stock": 50,
}

describe('ProductDetail page', ()=> {
  beforeEach(() => {
        const router = createMemoryRouter(
            [{ path: "/", element:  <ProductDetail product={fakeProduct} /> }],
            { initialEntries: [{
              pathname: "/",
              state: { fakeProduct },
            },] },
          );
        render(<CartProvider><RouterProvider router={router} /></CartProvider>)
    })
    it('should have a button with the text +', () => {
      const button: HTMLElement = screen.getByRole('button', { name: '+' });
      expect(button).toBeInTheDocument();    
    });
    it('should have a button with the text -', () => {
      const button : HTMLElement = screen.getByRole('button', { name: '-' });
      expect(button).toBeInTheDocument();    
    });

    it("increments count on + button click", () => {        
        const incrementElement: HTMLInputElement = screen.getByDisplayValue("1");
        const buttonElement: HTMLElement = screen.getByText("+");        
        fireEvent.click(buttonElement);        
        expect(incrementElement.value).toBe("2");
    });
     it("should not decrement to or below 0 when clicking - button", () => {        
        const incrementElement: HTMLInputElement = screen.getByDisplayValue("1");
        const buttonElement: HTMLElement = screen.getByText("-");        
        fireEvent.click(buttonElement);        
        expect(incrementElement.value).not.toBe("0");
    });
    it('should have a button with the text Add to cart', () => {     
      const button: HTMLElement = screen.getByRole('button', { name: /Add to cart/i });
      expect(button).toBeInTheDocument();
    });
})