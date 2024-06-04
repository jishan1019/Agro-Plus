import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetSingleBlogsInCategory } from "@/hooks/useFetchData";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Hi2Icons } from "@/constant";
import NotFoundImg from "@/assets/img/not-found.webp";
import { categories } from "@/utils";
import Loading from "@/components/loader";
import toast from "react-hot-toast";

export default function BlogDetailsHome() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const blogTitle = searchParams.get("blog");
  const router = useRouter();

  const notify = () => toast.success("Feedback create successfully.");

  const categoryIndex = (() => {
    switch (category) {
      case "Crop Cultivation":
        return 0;
      case "Livestock Farming":
        return 1;
      default:
        return 0;
    }
  })();

  const blogData = useGetSingleBlogsInCategory(categoryIndex, blogTitle || "");

  useEffect(() => {
    setIsLoading(false);
  }, [blogData, category, blogTitle]);

  const handelItemClick = (item: string) => {
    router.push(`/?category=${item}`);
  };

  const handelFormSubmit = () => {
    notify();
  };

  if (isLoading) {
    return (
      <Loading className="flex justify-center items-center h-[70vh] flex-col" />
    );
  }

  return (
    <>
      {blogData ? (
        <>
          <main className="grid grid-cols-12 gap-6 mt-6 mb-16 w-[95%]  md:w-[80%] mx-auto">
            <section className=" col-span-12 md:col-span-9 bg-background dark:bg-secondary p-3 md:p-5 shadow-md rounded-md">
              <h2 className="text-3xl font-bold text-primary my-4">
                {blogData?.itemTitle}
              </h2>

              <p className="text-sm text-black dark:text-white">
                <b>Author:</b> {blogData?.author}
              </p>

              <p className="text-xs text-black dark:text-white mt-1">
                {blogData?.pubDate}
              </p>

              <Image
                src={blogData?.itemImg || "https://i.ibb.co/Zx2GMKS/image.png"}
                alt={blogData?.itemTitle}
                width={600}
                height={400}
                className="w-full object-cover h-72 my-6 rounded-md bg-muted p-2"
                unoptimized={true}
              />

              <p
                className="text-sm my-6"
                dangerouslySetInnerHTML={{
                  __html: blogData?.itemDescription,
                }}
              />

              {/* Leave Comment */}
              <section className="text-black dark:text-white mt-20">
                <div className="bg-primary text-white dark:bg-primary py-4  text-center rounded-md">
                  <p>Leave a comment</p>
                </div>

                <div className="mt-4">
                  <textarea
                    className="border w-full border-secondary dark:border-primary p-2 rounded-md"
                    name=""
                    id=""
                    placeholder="Please enter your comment..."
                    rows={5}
                  ></textarea>

                  <div className="flex justify-between items-center gap-3 flex-col md:flex-row mt-2">
                    <input
                      className="border w-full border-secondary dark:border-primary p-2 rounded-md"
                      name=""
                      id=""
                      type="text"
                      placeholder="Please enter your name..."
                    ></input>

                    <input
                      className="border w-full border-secondary dark:border-primary p-2 rounded-md"
                      type="email"
                      placeholder="Please enter your email..."
                    ></input>
                  </div>
                </div>

                <Button
                  onClick={() => handelFormSubmit()}
                  size="lg"
                  className="rounded-full hover:bg-transparent hover:border hover:border-primary transition-all duration-300 mt-6 hover:text-black dark:text-white"
                >
                  Submit
                </Button>
              </section>
            </section>

            <section className="col-span-12 md:col-span-3 bg-background dark:bg-secondary shadow-md rounded max-h-96 overflow-y-auto">
              <h3 className="text-2xl font-bold text-center text-primary my-4">
                Categories
              </h3>

              <div>
                {categories?.map((category, index) => (
                  <p
                    className="border-b px-4 py-3 cursor-pointer hover:bg-primary hover:text-white"
                    key={index}
                    onClick={() => handelItemClick(category)}
                  >
                    {category}
                  </p>
                ))}
              </div>
            </section>
          </main>
        </>
      ) : (
        <div className="flex justify-center items-center h-[60vh] flex-col">
          <Image
            src={NotFoundImg}
            alt="Not Found"
            width={300}
            height={200}
            unoptimized={true}
          />

          <p>
            This Blog <b>{blogTitle}</b> are not found
          </p>

          <Link
            href="/"
            className={buttonVariants({
              size: "sm",
              className: "mt-5 text-xs flex items-center gap-2",
            })}
          >
            <Hi2Icons.HiOutlineArrowLongLeft />
            Go Back
          </Link>
        </div>
      )}
    </>
  );
}
