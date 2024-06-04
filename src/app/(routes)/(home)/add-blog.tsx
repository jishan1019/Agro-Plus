"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";

// package -> pnpm add react-quill quill

// Dynamically import react-quill with no SSR
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = async () => {
    // call api and save the category
  };

  return (
    <div>
      <h1>Add a New Blog</h1>
      <div className="flex justify-evenly items-center gap-4 mt-3">
        <input
          type="text"
          placeholder="Title"
          className="p-2 block border-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          className="p-2 block border-2 w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div>
        <QuillNoSSRWrapper
          value={description}
          onChange={setDescription}
          theme="snow"
          className="my-5"
        />
      </div>
      <button onClick={handleSave}>Submit</button>

      <div dangerouslySetInnerHTML={{ __html: description }} />
      <div className="mt-8">{description}</div>
    </div>
  );
};

export default AddBlog;
