// importing images for headerCart
import cartItem1 from "@/assets/images/cart-item-1.png";
import cartItem2 from "@/assets/images/cart-item-2.png";
import cartItem3 from "@/assets/images/cart-item-3.png";
import cartItem4 from "@/assets/images/cart-item-4.png";

// importing images for menuItems
import menu1 from "@/assets/images/menu-1.png";
import menu2 from "@/assets/images/menu-2.png";
import menu3 from "@/assets/images/menu-3.png";
import menu4 from "@/assets/images/menu-4.png";
import menu5 from "@/assets/images/menu-5.png";
import menu6 from "@/assets/images/menu-6.png";

// importing images for products
import product1 from "@/assets/images/product-1.png";
import product2 from "@/assets/images/product-2.png";
import product3 from "@/assets/images/product-3.png";

// importing images for reviews
import quoteImg from "@/assets/images/quote-img.png";
import pic1 from "@/assets/images/pic-1.png";
import pic2 from "@/assets/images/pic-2.png";
import pic3 from "@/assets/images/pic-3.png";

// importing images for blogPosts
import blog1 from "@/assets/images/blog-1.jpeg";
import blog2 from "@/assets/images/blog-2.jpeg";
import blog3 from "@/assets/images/blog-3.jpeg";

export const headerCart = [
  {
    image: cartItem1,
    alt: "item-1",
    title: "cart item 01",
    price: "$15.99/-",
  },
  {
    image: cartItem2,
    alt: "item-2",
    title: "cart item 02",
    price: "$15.99/-",
  },
  {
    image: cartItem3,
    alt: "item-3",
    title: "cart item 03",
    price: "$15.99/-",
  },
  {
    image: cartItem4,
    alt: "item-4",
    title: "cart item 04",
    price: "$15.99/-",
  },
];

export const menuItems = [
  {
    image: menu1,
    title: "tasty and healthy",
    price: "$15.99",
    oldPrice: "$20.99",
    buttonText: "add to cart",
  },
  {
    image: menu2,
    title: "tasty and healthy",
    price: "$15.99",
    oldPrice: "$20.99",
    buttonText: "add to cart",
  },
  {
    image: menu3,
    title: "tasty and healthy",
    price: "$15.99",
    oldPrice: "$20.99",
    buttonText: "add to cart",
  },
  {
    image: menu4,
    title: "tasty and healthy",
    price: "$15.99",
    oldPrice: "$20.99",
    buttonText: "add to cart",
  },
  {
    image: menu5,
    title: "tasty and healthy",
    price: "$15.99",
    oldPrice: "$20.99",
    buttonText: "add to cart",
  },
  {
    image: menu6,
    title: "tasty and healthy",
    price: "$15.99",
    oldPrice: "$20.99",
    buttonText: "add to cart",
  },
];

export const products = [
  {
    id: 1,
    image: product1,
    alt: "product-1",
    title: "fresh coffee",
    stars: 4.5,
    price: 15.99,
    oldPrice: 20.99,
  },
  {
    id: 2,
    image: product2,
    alt: "product-2",
    title: "fresh coffee",
    stars: 4.5,
    price: 15.99,
    oldPrice: 20.99,
  },
  {
    id: 3,
    image: product3,
    alt: "product-3",
    title: "fresh coffee",
    stars: 4.5,
    price: 15.99,
    oldPrice: 20.99,
  },
];

export const reviews = [
  {
    id: 1,
    quoteImage: quoteImg,
    quoteAlt: "quote",
    image: pic1,
    alt: "pic-1",
    title: "jonh deo",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ducimus sed sint, accusantium tenetur aliquid veniam maxime eos exercitationem cumque!",
    stars: 4.5,
  },
  {
    id: 2,
    quoteImage: quoteImg,
    quoteAlt: "quote",
    image: pic2,
    alt: "pic-2",
    title: "lara deo",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ducimus sed sint, accusantium tenetur aliquid veniam maxime eos exercitationem cumque!",
    stars: 4.5,
  },
  {
    id: 3,
    quoteImage: quoteImg,
    quoteAlt: "quote",
    image: pic3,
    alt: "pic-3",
    title: "james deo",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ducimus sed sint, accusantium tenetur aliquid veniam maxime eos exercitationem cumque!",
    stars: 4.5,
  },
];

export const blogPosts = [
  {
    image: blog1,
    alt: "blog1",
    title: "tasty and refreshing coffee",
    author: "admin",
    date: "21st May, 2022",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, ipsa!",
    link: "#",
  },
  {
    image: blog2,
    alt: "blog2",
    title: "tasty and refreshing coffee",
    author: "admin",
    date: "21st May, 2022",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, ipsa!",
    link: "#",
  },
  {
    image: blog3,
    alt: "blog3",
    title: "tasty and refreshing coffee",
    author: "admin",
    date: "21st May, 2022",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, ipsa!",
    link: "#",
  },
];
