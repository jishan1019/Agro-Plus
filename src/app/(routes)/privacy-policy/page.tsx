"use client";

import Footer from "../(shared)/(home)/footer";
import Header from "../(shared)/(home)/header";
import PrivacyHome from "./privacy-home";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <PrivacyHome />
      </div>
      <Footer />
    </>
  );
}
