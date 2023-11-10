// //Kör testning på productInfo-sidan för att få till att man kan increment och decrement counten på antal varor man ska lägga i varukorgen
import { render, screen, fireEvent } from "@testing-library/react";
import ProductInfoPage from "../../pages/ProductInfoPage";
import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import CartProvider from "../../utils/context/cartContext";
//import { useCart } from "../../utils/context/cartContext";

//Mocka din CartContext (om du har en)
// jest.mock('../../utils/context/cartContext', () => ({
//   useCart: () => ({
//     dispatch: jest.fn(), // Mocka dispatch-funktionen
//   }),
// }));

const fakeProduct = {    
    "id": 6,
    "name": "Holiday Macaroon Medley",
    "price": 80,
    "weight": 150,
    "description": "Indulge in the delightful flavors of the season with our Holiday Macaroon Medley. These exquisite macaroons are a delightful blend of festive colors and exquisite tastes. Each macaroon is carefully crafted to capture the spirit of Christmas with flavors like cranberry, white chocolate, and gingerbread. These Holiday Macaroons are perfect for adding a touch of elegance to your holiday celebrations or as a delightful gift for loved ones. Experience the magic of the holidays with these charming and delectable treats.",
    "image": "http://localhost:3000/macaroons.jpg",
}

describe('ProductInfo page', ()=> {
  beforeEach(() => {
        const router = createMemoryRouter(
            [{ path: "/", element: <ProductInfoPage /> }],
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
  // const cartContext = useCart(); 
  // if (!cartContext) {
  //   // Om context är undefined
  //   return null; // eller visa ett alternativt innehåll
  // }
  // const { dispatch } = cartContext;
  beforeEach(() => {
      const router = createMemoryRouter(
          [{ path: "/", element: <ProductInfoPage /> }],
          { initialEntries: [{
            pathname: "/",
            state: { fakeProduct },
          },] },
        );
      render(<CartProvider><RouterProvider router={router} /></CartProvider>)
  })
  
  it('should have a button with the text Add to cart', () => {     
        const button = screen.getByRole('button', { name: /Add to cart/i });
        expect(button).toBeInTheDocument();
      });
  
      // ---- Den nedanför fungerar ej ? ------ //
      // it('clicking the Add to cart button will add product to cart', () => {
        
      //   const button = screen.getByRole('button', { name: /Add to cart/i });
      
      //   fireEvent.click(button);
      //   expect(dispatch).toHaveBeenCalledWith({
      //     type: 'ADD_TO_CART',
      //     payload: fakeProduct,
      //   });
       
      // });
});