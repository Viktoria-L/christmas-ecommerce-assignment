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

//Tänkte bygga upp interface för produkterna och lägga in