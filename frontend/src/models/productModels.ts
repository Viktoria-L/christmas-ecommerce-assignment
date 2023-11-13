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

export type CartState = {
   myCart: ProductInfo[]
}

export type CartAction = {
    type: string,
    payload: ProductInfo,
}