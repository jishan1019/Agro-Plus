import React, { useState } from "react";
import { CiHeart } from "@/constant/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetAllBlogsInCategory, useGetCategory } from "@/hooks/useFetchData";
import Image from "next/image";
import { TBlog } from "@/types";
import Loading from "@/components/loader";
import { Button } from "@/components/ui/button";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Blogs() {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const getSingleCategory = useGetCategory(search || "Crop Cultivation");

  const categoryIndex = (() => {
    switch (search) {
      case "Crop Cultivation":
        return 0;
      case "Livestock Farming":
        return 1;
      default:
        return 0;
    }
  })();

  // Call the hook with the determined parameter
  const getBlogs = useGetAllBlogsInCategory(categoryIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handelMenuClick = (href: string) => {
    router.push(`${href}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, getBlogs?.length);
  const currentData = getBlogs?.slice(startIndex, endIndex);

  if (!getSingleCategory || !getBlogs?.length) {
    return (
      <Loading className="flex justify-center items-center h-[60vh] flex-col" />
    );
  }

  return (
    <div className="p-2 my-16 md:p-4 md:w-[80%] bg-background mx-auto">
      <header className="flex justify-between items-center flex-col sm:flex-row">
        <div className="max-w-60">
          <h3 className="font-bold text-xl md:text-4xl">Latest Blogs</h3>
          <p className="text-xs pt-2 max-w-72">
            {getSingleCategory?.categoryName}
          </p>
        </div>

        <div className="w-[50%] inline-flex gap-1 items-center sm:hidden">
          <p className="bg-primary h-[1px] w-full"></p>
          <CiHeart className="text-primary text-3xl" />
          <p className="bg-primary h-[1px] w-full"></p>
        </div>

        <p className="text-xs pt-2 max-w-72 text-center sm:text-right">
          {getSingleCategory?.categoryDescription &&
          getSingleCategory?.categoryDescription?.length > 100
            ? getSingleCategory?.categoryDescription?.slice(0, 100) + "..."
            : getSingleCategory?.categoryDescription}
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {currentData?.map((blog: TBlog) => (
          <div
            key={blog.blogId}
            className="flex flex-col items-center shadow-lg hover:border hover:border-primary transition-all duration-300 rounded-md bg-background dark:bg-secondary"
          >
            <div className="py-5 px-4">
              <img
                src={blog.itemImg || "https://i.ibb.co/Zx2GMKS/image.png"}
                alt={blog.itemTitle}
                className="object-cover w-full h-[170px] rounded-md bg-muted p-3"
              />

              <h3 className="font-bold text-lg md:text-xl mt-2">
                {blog?.itemTitle}
              </h3>

              <p
                className="text-xs pt-2 max-w-72"
                dangerouslySetInnerHTML={{
                  __html:
                    blog?.itemDescription?.length > 100
                      ? blog?.itemDescription?.slice(0, 200) + "..."
                      : blog?.itemDescription,
                }}
              />

              <p className=" text-xs mt-4">
                <span className="font-semibold"> Author:</span>{" "}
                {blog.author || "unknown"} , {blog.pubDate}
              </p>

              <Button
                onClick={() =>
                  handelMenuClick(
                    `/blog-details?category=${blog?.categoryName}&blog=${blog?.itemTitle}`
                  )
                }
                className="rounded-full hover:bg-transparent hover:border hover:border-primary transition-all duration-300 mt-6 hover:text-black dark:text-white"
              >
                Read More
              </Button>
            </div>
          </div>
        ))}
      </main>

      <footer>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange} // Pass the handlePageChange function
          totalItems={getBlogs?.length}
        >
          <PaginationContent>
            <PaginationItem>
              {currentPage == 1 ? (
                <PaginationPrevious
                  isActive={false}
                  className="cursor-not-allowed"
                />
              ) : (
                <PaginationPrevious
                  className="cursor-pointer"
                  onClick={() => handlePageChange(currentPage - 1)}
                />
              )}
            </PaginationItem>
            {/* Pagination links will be generated automatically */}
            <PaginationItem>
              <PaginationLink isActive>{currentPage}</PaginationLink>
            </PaginationItem>

            {/* {currentPage + 1 !== getBlogs?.length && (
              <PaginationItem>
                <PaginationLink>{currentPage + 1}</PaginationLink>
              </PaginationItem>
            )} */}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink isActive>{getBlogs?.length - 1}</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              {currentPage + 1 === getBlogs?.length ? (
                <PaginationNext
                  isActive={false}
                  className="cursor-not-allowed"
                /> // Disable Next button if current page is the last page
              ) : (
                <PaginationNext
                  className="cursor-pointer"
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </footer>
    </div>
  );
}
