import { ModeToggle } from "@/components/mode-toggle";
import { Config } from "@/config";
import { MdKeyboardArrowDown } from "@/constant";
import { navLinks } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useState } from "react";

export default function Header({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("Home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handelItemClick = (item: string) => {
    setActiveCategory(item);
  };

  return (
    <>
      <header>
        <nav className="bg-background dark:bg-secondary border px-2 md:px-6 py-2.5 md:py-6 rounded shadow">
          <div className=" flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
              <p className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap">
                  {Config.title}
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
                {navLinks?.map((item, index) => (
                  <li
                    className={`${
                      activeCategory === item.name
                        ? "bg-primary text-white md:text-black md:border-b md:border-primary md:bg-transparent"
                        : ""
                    }`}
                    key={item.name}
                    onClick={() => handelItemClick(item.name)}
                  >
                    <Link href={item.href}>
                      <p
                        className="py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 border-b md:border-b-0 text-sm inline-flex items-center gap-1"
                        aria-current="page"
                      >
                        {item.name}
                        {item.name === "Categories" && (
                          <span>
                            <MdKeyboardArrowDown className="mt-[2px]" />
                          </span>
                        )}
                      </p>
                    </Link>
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

      <main>{children}</main>
    </>
  );
}
