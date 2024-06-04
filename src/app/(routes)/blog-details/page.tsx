"use client";
import BlogDetailsHome from "./blog-details";
import Header from "../(shared)/(home)/header";
import Footer from "../(shared)/(home)/footer";

export default function BlogDetails() {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <BlogDetailsHome />
      </div>
      <Footer />
    </div>
  );
}
