type Rating = Readonly<{
    rate: number;
    count: number;
}>;

export type Product = Readonly<{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}>;
