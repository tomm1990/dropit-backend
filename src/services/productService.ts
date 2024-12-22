import { Product } from "../models/productModel";

const products: Product[] = [
    {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        price: 59.99,
        description: "Experience crystal clear sound with these lightweight wireless headphones.",
        category: "Electronics",
        image: "https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg",
        rating: {
            rate: 4.5,
            count: 120,
        },
    },
    {
        id: 2,
        title: "Stainless Steel Water Bottle",
        price: 19.99,
        description: "Keep your drinks hot or cold for hours with this eco-friendly water bottle.",
        category: "Home & Kitchen",
        image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
        rating: {
            rate: 4.8,
            count: 250,
        },
    },
    {
        id: 3,
        title: "Men's Running Shoes",
        price: 89.99,
        description: "Comfortable and durable running shoes for all types of terrain.",
        category: "Sports & Outdoors",
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        rating: {
            rate: 4.3,
            count: 98,
        },
    },
    {
        id: 4,
        title: "Smart LED Light Bulb",
        price: 14.99,
        description: "Control your lighting with your voice or phone using this smart light bulb.",
        category: "Smart Home",
        image: "https://images.pexels.com/photos/6586073/pexels-photo-6586073.jpeg",
        rating: {
            rate: 4.6,
            count: 340,
        },
    },
    {
        id: 5,
        title: "Portable Charcoal Grill",
        price: 49.99,
        description: "Compact and lightweight grill, perfect for picnics and outdoor adventures.",
        category: "Outdoor Cooking",
        image: "https://images.pexels.com/photos/54455/grill-sausages-food-meat-54455.jpeg",
        rating: {
            rate: 4.2,
            count: 75,
        },
    },
];



export const getAllProducts = async (): Promise<Product[]> => {
    return products;
};

export const createNewProduct = async (newProduct: Omit<Product, 'id'>): Promise<Product> => {
    const newProductObject: Product = {
        id: Date.now(),
        ...newProduct
    }
    products.push(newProductObject);

    return newProductObject
};

export const readProductById = async (id: Product['id']): Promise<Product | undefined> => {
    const result = products.find((value) => value.id === id);
    return result;
}
