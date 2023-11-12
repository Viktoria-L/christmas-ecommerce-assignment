export interface HeroProps {
    title: string;
    subtitle: string;
    text: string;
    buttons: boolean;
}

export interface ProductInfo {
    id: number;
    name: string;
    price: number;
    weight: number;
    description: string;
    image: string,
    stock: number,
}

export interface ProductParams {
    params: {
        id: string;
    }
}

export interface ProductData {
    data: ProductInfo;
}

//Types för korgen och contexten

export type CartState = {
   myCart: ProductInfo[]
}

export type CartAction = {
    type: string,
    payload: ProductInfo,
 }
 


// export type ContextProps = {
//     children: React.ReactNode;
// }

// export type ContextType = {
//     cart: CartType;
//     setCart: React.Dispatch<React.SetStateAction<CartType>>;
// }

// export type CartProps = {
//     cart : CartType,
//     setCart: React.Dispatch<React.SetStateAction<CartType>>;
//     modalCart: boolean;
//     setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
//     setProducts: React.Dispatch<React.SetStateAction<ProductStateType[]>>;
// }
