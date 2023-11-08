// //Kör testning på productInfo-sidan för att få till att man kan increment och decrement counten på antal varor man ska lägga i varukorgen
import { render, screen, fireEvent } from "@testing-library/react";
import ProductInfo from "../../pages/ProductInfoPage";
import '@testing-library/jest-dom'
import { createMemoryRouter, RouterProvider } from "react-router-dom";

describe('ProductInfo page', ()=> {
  const fakeProduct = {
    
      "id": 6,
      "name": "Holiday Macaroon Medley",
      "price": 80,
      "weight": 150,
      "description": "Indulge in the delightful flavors of the season with our Holiday Macaroon Medley. These exquisite macaroons are a delightful blend of festive colors and exquisite tastes. Each macaroon is carefully crafted to capture the spirit of Christmas with flavors like cranberry, white chocolate, and gingerbread. These Holiday Macaroons are perfect for adding a touch of elegance to your holiday celebrations or as a delightful gift for loved ones. Experience the magic of the holidays with these charming and delectable treats.",
      "image": "http://localhost:3000/macaroons.jpg",
  }

  beforeEach(() => {
        const router = createMemoryRouter(
            [{ path: "/", element: <ProductInfo /> }],
            { initialEntries: [{
              pathname: "/",
              state: { fakeProduct },
            },] },
          );
        render(<RouterProvider router={router} />)
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
        const buttonElement = screen.getByText("+");        
        fireEvent.click(buttonElement);        
        expect(incrementElement.value).toBe("2");
    });
     it("should not decrement to or below 0 when clicking - button", () => {        
        const incrementElement: HTMLInputElement = screen.getByDisplayValue("1");
        const buttonElement = screen.getByText("-");        
        fireEvent.click(buttonElement);        
        expect(incrementElement.value).not.toBe("0");
    });
})


describe('Product info page should have a button for adding and removing to shopping cart', () => {
  const fakeProduct = {
    
    "id": 6,
    "name": "Holiday Macaroon Medley",
    "price": 80,
    "weight": 150,
    "description": "Indulge in the delightful flavors of the season with our Holiday Macaroon Medley. These exquisite macaroons are a delightful blend of festive colors and exquisite tastes. Each macaroon is carefully crafted to capture the spirit of Christmas with flavors like cranberry, white chocolate, and gingerbread. These Holiday Macaroons are perfect for adding a touch of elegance to your holiday celebrations or as a delightful gift for loved ones. Experience the magic of the holidays with these charming and delectable treats.",
    "image": "http://localhost:3000/macaroons.jpg",
}

  beforeEach(() => {
      const router = createMemoryRouter(
          [{ path: "/", element: <ProductInfo /> }],
          { initialEntries: [{
            pathname: "/",
            state: { fakeProduct },
          },] },
        );
      render(<RouterProvider router={router} />)
  })
  
  it('should have a button with the text Add to cart', () => {     
        const button = screen.getByRole('button', { name: /Add to cart/i });
        expect(button).toBeInTheDocument();
      });
  
      it('clicking the Add to cart button will add product to cart', () => {
        const button = screen.getByRole('button', { name: /Add to cart/i });
        fireEvent.click(button);
        expect(button).toHaveStyle({ 'background-color': 'red' });
       
      });
});