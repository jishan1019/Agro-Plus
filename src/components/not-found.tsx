"use client";

import { Hi2Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import NotFoundImg from "@/assets/img/not-found.webp";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={NotFoundImg}
          alt="Not Found"
          width={563}
          height={450}
          unoptimized={true}
          className="select-none w-96"
        />
        <p className="text-base md:text-lg mt-3 px-4 md:px-0 text-center">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className={buttonVariants({
            size: "sm",
            className: "mt-5 text-xs flex items-center gap-2",
          })}
        >
          <Hi2Icons.HiOutlineArrowLongLeft />
          Go home
        </Link>
      </div>
    </div>
  );
}
