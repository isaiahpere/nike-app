import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    id: 1,
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    id: 2,
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    id: 3,
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    id: 1,
    imgUrl: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    stars: 4.5,
  },
  {
    id: 2,
    imgUrl: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    stars: 4.5,
  },
  {
    id: 3,
    imgUrl: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    stars: 4.8,
  },
  {
    id: 4,
    imgUrl: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    stars: 4.7,
  },
];

export const services = [
  {
    key: 1,
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    key: 2,
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    key: 3,
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    id: 1,
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    id: 2,
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/", id: 1 },
      { name: "Air Max 1", link: "/", id: 2 },
      { name: "Air Jordan 1", link: "/", id: 3 },
      { name: "Air Force 2", link: "/", id: 4 },
      { name: "Nike Waffle Racer", link: "/", id: 5 },
      { name: "Nike Cortez", link: "/", id: 6 },
    ],
  },
  {
    id: 2,
    title: "Help",
    links: [
      { name: "About us", link: "/", id: 1 },
      { name: "FAQs", link: "/", id: 2 },
      { name: "How it works", link: "/", id: 3 },
      { name: "Privacy policy", link: "/", id: 4 },
      { name: "Payment policy", link: "/", id: 5 },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        id: 1,
        name: "customer@nike.com",
        link: "mailto:customer@nike.com",
      },
      {
        id: 2,
        name: "+92554862354",
        link: "tel:+92554862354",
      },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo", key: 1 },
  { src: twitter, alt: "twitter logo", key: 2 },
  { src: instagram, alt: "instagram logo", key: 3 },
];
