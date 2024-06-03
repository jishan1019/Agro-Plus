import { Images } from "@/constant";
import React from "react";

export default function Cover() {
  return (
    <div>
      <div
        className="relative h-[30vh] md:h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${Images.CoverImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl">Your Cover Section</h1>
        </div>
      </div>
    </div>
  );
}
