"use client";

import React from "react";
import AboutHome from "./about";
import Header from "../(shared)/(home)/header";
import Footer from "../(shared)/(home)/footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <AboutHome />
      </div>
      <Footer />
    </>
  );
}
