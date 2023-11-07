// //Kör testning på productInfo-sidan för att få till att man kan increment och decrement counten på antal varor man ska lägga i varukorgen
import { render, screen } from "@testing-library/react";
import ProductInfo from "../../pages/ProductInfoPage";
import '@testing-library/jest-dom'
import { createMemoryRouter, RouterProvider } from "react-router-dom";

describe('ProductInfo page', ()=> {
    beforeEach(() => {
        const router = createMemoryRouter(
            [{ path: "/", element: <ProductInfo /> }],
            { initialEntries: ["/"] },
          );
        render(<RouterProvider router={router} />)
    })
    it('should have a button with the text +', () => {
        const router = createMemoryRouter(
            [{ path: "/", element: <ProductInfo /> }],
            { initialEntries: ["/"] },
          );
        render(<RouterProvider router={router} />)
      // Act...
      const button = screen.getByRole('button', { name: '+' });
      // Assert...
      expect(button).toBeInTheDocument();
    
    });

    // it("increments count on button click", () => {
    //     const router = createMemoryRouter(
    //         [{ path: "/", element: <ProductInfo /> }],
    //         { initialEntries: ["/"] },
    //       );
        
    //     const { getByText } = render(<RouterProvider router={router} />)
    //     const incrementElement = getByText("Increment: 0");
    //     const buttonElement = getByText("Increment");
        
    //     fireEvent.click(buttonElement);
        
    //     expect(incrementElement.textContent).toBe("Increment: 1");
    // });
})


// describe('Product info should have a button for adding and removing to shopping cart', () => {
//       it('should have a button with the text Add to cart', () => {
//         render(<Products />);
//         const button = screen.getByRole('button', { name: /Add to cart/i });

//         expect(button).toBeInTheDocument();
//       });
  
//       it('the button should be red', () => {
  
//         render(<Products />);
//         const button = screen.getByRole('button', { name: /Add to cart/i });
//         expect(button).toHaveStyle({ 'background-color': 'red' });
       
//       });
  
//       it('the button should change background to gray when clicked', () => {
     
//         render(<Products />);
//         const button = screen.getByRole('button', { name: /Add to cart/i });
//         fireEvent.click(button);
  
//         expect(button).toHaveStyle({ 'background-color': 'gray' });
//       });
  
     
//   });