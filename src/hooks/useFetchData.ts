import { Data } from "@/constant";
import { TBlog, TCategory } from "@/types";

export const useGetCategory = (name: string): TCategory | undefined => {
  const singleCategory = Data?.categoryData?.find(
    (item: TCategory) => item?.categoryName === name
  );
  return singleCategory;
};

export const useGetAllBlogsInCategory = (
  blogsJsonPosition: number
): TBlog[] => {
  const blog = Data?.blogsData?.[blogsJsonPosition];
  return blog;
};

export const useGetSingleBlogsInCategory = (
  blogsJsonPosition: number,
  itemName: string
): TBlog | undefined => {
  const blogs = Data?.blogsData?.[blogsJsonPosition];
  const blog = blogs?.find((item) => item?.itemTitle === itemName);

  return blog;
};
