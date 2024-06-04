import { ModeToggle } from "@/components/mode-toggle";
import { Config } from "@/config";
import { MdKeyboardArrowDown } from "@/constant";
import { TNavLink } from "@/types/nav.type";
import { categories, navLinks } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("Home");
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handelItemClick = (item: string) => {
    setMenuOpen(false);
    router.push(`?category=${item}`);
    router.refresh();
  };

  const handelMenuClick = (item: string, href: string) => {
    setActiveCategory(item);
    if (item !== "Categories") {
      setMenuOpen(false);
      router.push(`${href}`);
    }
  };

  return (
    <>
      <header>
        <nav className="bg-secondary text-white dark:border px-2 md:px-6 py-2.5 md:py-6 shadow-md">
          <div className=" flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
              <p className="flex items-center">
                <span className="self-center text-sm md:text-xl font-semibold whitespace-nowrap">
                  {Config?.title}
                </span>
              </p>
            </Link>

            {/* Togle Menu */}
            <div className="flex items-center">
              <div className=" md:hidden">
                <ModeToggle />
              </div>

              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`w-full md:block md:w-auto ${
                menuOpen ? "" : "hidden"
              }`}
              id="mobile-menu"
            >
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:items-center">
                {navLinks?.map((item: TNavLink) => (
                  <li
                    className="relative cursor-pointer"
                    key={item?.name}
                    onClick={() => {
                      handelMenuClick(item?.name, item?.href);
                    }}
                  >
                    <p aria-current="page">
                      <span
                        className={`inline-flex items-center gap-1 py-2 px-3 md:p-0 ${
                          activeCategory === item?.name
                            ? "bg-primary md:border-b md:border-primary md:bg-transparent w-full"
                            : ""
                        }`}
                      >
                        {item.name}
                        {item.name === "Categories" && (
                          <span>
                            <MdKeyboardArrowDown className="mt-[2px]" />
                          </span>
                        )}
                      </span>

                      <span className=" md:block md:absolute md:z-50 mt-4 shadow-md bg-background dark:bg-secondary w-56">
                        {activeCategory === "Categories" &&
                          item?.name === "Categories" &&
                          categories?.map((category, index) => (
                            <p
                              className="w-full text-white md:text-black md:dark:text-white py-2  pl-6 md:px-3 border-b cursor-pointer hover:bg-primary 
                              hover:text-white transition-all duration-300"
                              key={index}
                              onClick={() => handelItemClick(category)}
                            >
                              {category}
                            </p>
                          ))}
                      </span>
                    </p>
                  </li>
                ))}

                <div className="hidden md:block">
                  <ModeToggle />
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
