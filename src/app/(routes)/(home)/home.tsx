"use client";
import Footer from "../(shared)/(home)/footer";
import Header from "../(shared)/(home)/header";
import Category from "./category";
import Cover from "./cover";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <Cover />
        <Category />
      </div>
      <Footer />
    </>
  );
}
