"use client";

import Footer from "../(shared)/(home)/footer";
import Header from "../(shared)/(home)/header";
import TramsHome from "./trams-home";

export default function TramsAndCondition() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <TramsHome />
      </div>
      <Footer />
    </>
  );
}
