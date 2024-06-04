"use client";

import Footer from "../(shared)/(home)/footer";
import Header from "../(shared)/(home)/header";
import ContactHome from "./contact-home";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <ContactHome />
      </div>
      <Footer />
    </>
  );
}
