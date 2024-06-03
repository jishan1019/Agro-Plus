export type TCategory = {
  _id: string;
  categoryName: string;
  categoryDescription?: string;
};

export type TBlog = {
  blogId: string;
  categoryName: string;
  categoryDescription?: string;
  itemTitle: string;
  itemImg?: string;
  itemDescription: string;
  author?: string;
  pubDate?: string;
};
