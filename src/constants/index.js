import Sort from "../assets/asset 11.svg";
import Prototype from "../assets/asset 13.svg";
import FirstClick from "../assets/asset 14.svg";
import Surveys from "../assets/asset 15.svg";
import Tests from "../assets/asset 16.svg";
import Timer from "../assets/asset 17.svg";

const services = [
  {
    image: Sort,
    title: "Card sorting",
    desc: "Discover how people group and label information.",
  },
  {
    image: Prototype,
    title: "Prototype tests",
    desc: "Test interaction with first click and navigation tests.",
  },
  {
    image: FirstClick,
    title: "First click tests",
    desc: "Discover how people group and label information.",
  },
  {
    image: Surveys,
    title: "Surveys",
    desc: "Get feedback on images, videos or audio files.",
  },
  {
    image: Tests,
    title: "Preference tests",
    desc: "Find out which designs users prefer and why.",
  },
  {
    image: Timer,
    title: "Five second tests",
    desc: "Test comprehensibility by measuring first impressions.",
  },
];

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Overview", link: "/" },
      { name: "Pricing", link: "/" },
      { name: "Research panel", link: "/" },
      { name: "Customers", link: "/" },
      { name: "Status page", link: "/" },
      { name: "Sign up", link: "/" },
      { name: "Book a demo", link: "/" },
    ],
  },
  {
    title: "Methodologies",
    links: [
      { name: "Card sorting", link: "/" },
      { name: "Prototype testing", link: "/" },
      { name: "First click tests", link: "/" },
      { name: "Preference tests", link: "/" },
      { name: "Five second tests", link: "/" },
      { name: "Design surveys", link: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", link: "/" },
      { name: "Examples", link: "/" },
      { name: "Testing guides", link: "/" },
      { name: "Research panel calculator", link: "/" },
      { name: "Help center", link: "/" },
      { name: "Contact", link: "/" },
      { name: "Careers", link: "/" },
    ],
  },
];

export { services, footerLinks };
