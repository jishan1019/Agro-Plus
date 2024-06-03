import { Data } from "@/constant";

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Categories",
    href: "#",
  },
  {
    name: "Blogs",
    href: "/#blogs",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const categories = Data.categoryData?.map(
  (category) => category?.categoryName
);
