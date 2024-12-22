export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;

  rating: number;
  image: string;
  category: string;
  brand: string;
  reviewsCount: number;
  size: string;
  color: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Montes Scelerisque",
    description: "A beautiful and ergonomic chair for modern living spaces.",
    price: 650,
    rating: 3.9,
    image: "/image/product12.png",
    category: "Chairs",
    brand: "Cup",
    reviewsCount: 708,
    color:'brown' , 
    size:"small" , 
  },
  {
    id: 2,
    name: "Leo Sodales Varius",
    description: "A stylish and durable chair for offices and homes.",
    price: 780,
    rating: 2,
    image: "/image/product1.png",
    category: "Chairs",
    brand: "Plate",
    reviewsCount: 118,
    color:'red' , 
    size:"large",
  },
  {
    id: 3,
    name: "Hanging Lamp Berlingo",
    description: "A modern lamp to add elegance to your room.",
    price: 1550,
    rating: 2.5,
    image: "/image/product2.png",
    category: "Lighting",
    brand: "Chair",
    reviewsCount: 750,
    color:'red' , 
    size:"small",
  },
  {
    id: 4,
    name: "Commodo Adipiscing",
    description: "A practical and high-quality cup for everyday use.",
    price: 1920,
    rating: 1,
    image: "/image/product3.png",
    category: "Cups",
    brand: "Juice",
    reviewsCount: 228,
    color:'red' , 
    size:"x-large",
  },
  {
    id: 5,
    name: "Commodo Adipiscing",
    description: "A practical and high-quality cup for everyday use.",
    price: 2320,

    rating: 4.9,
    image: "/image/product4.png",
    category: "Cups",
    brand: "Juice",
    reviewsCount: 28,
    color:'green' , 
    size:"large",
  },
  {
    id: 6,
    name: "Commodo Adipiscing",
    description: "A practical and high-quality cup for everyday use.",
    price: 1200,

    rating: 4.9,
    image: "/image/product5.png",
    category: "Cups",
    brand: "Juice",
    reviewsCount: 228,
    color:'white' , 
    size:"xx-large",
  },
  {
    id: 7,
    name: "Commodo Adipiscing",
    description: "A practical and high-quality cup for everyday use.",
    price: 1280,

    rating: 4.9,
    image: "/image/product6.png",
    category: "Cups",
    brand: "Juice",
    reviewsCount: 428,
    color:'red' , 
    size:"large",
  },
  {
    id: 8,
    name: "Commodo Adipiscing",
    description: "A practical and high-quality cup for everyday use.",
    price: 1230,

    rating: 4.9,
    image: "/image/product7.png",
    category: "Cups",
    brand: "Juice",
    reviewsCount: 228,
    color:'orange' , 
    size:"small",
  },
  {
    id: 9,
    name: "Commodo Adipiscing",
    description: "A practical and high-quality cup for everyday use.",
    price: 1120,

    rating: 4.9,
    image: "/image/product8.png",
    category: "Cups",
    brand: "Juice",
    reviewsCount: 228,
    color:'yellow' , 
    size:"large",
  },
  {
    id: 10,
    name: "Commodo Adipiscing",
    description: "A practical and high-quality cup for everyday use.",
    price: 920,
  
    rating: 4.9,
    image: "/image/product9.png",
    category: "Cups",
    brand: "Juice",
    reviewsCount: 228,
    color:'black' , 
    size:"large",
  },
  {
    id: 11,
    name: "Commodo Adipiscing",
    description: "A practical and high-quality cup for everyday use.",
    price: 620,

    rating: 4.9,
    image: "/image/product10.png",
    category: "Cups",
    brand: "Juice",
    reviewsCount: 228,
    color:'pink' , 
    size:"large",
  },
  {
    id: 12,
    name: "Commodo Adipiscing",
    description: "A practical and high-quality cup for everyday use.",
    price: 320,

    rating: 4.9,
    image: "/image/product11.png",
    category: "Cups",
    brand: "Juice",
    reviewsCount: 228,
    color:'red' , 
    size:"large",
  },
];
 