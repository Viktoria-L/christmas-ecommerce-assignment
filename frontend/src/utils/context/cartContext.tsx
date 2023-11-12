import { createContext, useContext, useReducer, ReactNode } from "react";
import { CartState, CartAction } from "../../models/productModels";

const CartContext = createContext<{ cartState: CartState; dispatch: React.Dispatch<CartAction> } | undefined>(
    undefined
  );

function cartReducer(state: CartState, action: CartAction): CartState {
    switch(action.type){
        case 'ADD_TO_CART':
            return {...state, myCart: [...state.myCart, action.payload]};
        // case 'SET_CART':
        //     return {...state, myCart: [...state.myCart, action.payload]};
        default:
            return state;
    }
}
interface CartProviderProps {
    children: ReactNode;
  }

function CartProvider ({children}: CartProviderProps) {
    const initialState: CartState = { myCart: []};
    const [cartState, dispatch] = useReducer(cartReducer, initialState);
    
    return (
        <CartContext.Provider value={{cartState, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;

export function useCart() {
    return useContext(CartContext);
  }
