import React, { useEffect, useState } from "react";

type TBlogs = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Category() {
  const [data, setData] = useState<TBlogs[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      this is category
      <ul className="p-5 space-y-3">
        {data?.map((blog: TBlogs, index) => (
          <li key={index}>
            <p className="text-red-500">title: {blog?.title}</p>

            <p className="text-blue-500">Description: {blog?.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
