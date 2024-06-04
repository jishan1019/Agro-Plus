import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import React from "react";
import CoverImg from "@/assets/img/cover.jpg";

export default function Cover() {
  return (
    <div
      className="relative h-[30vh] md:h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${CoverImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center flex-col h-full">
        <h3 className="text-white font-bold text-[11px] md:text-3xl uppercase">
          {Config.tagLine}
        </h3>
        <h5 className="text-white font-bold text-[9px] md:text-lg mt-4 uppercase">
          {Config.tagLine2}
        </h5>

        <Button className="rounded-full hover:bg-transparent hover:border hover:border-primary transition-all duration-300 mt-6">
          Read Blogs
        </Button>
      </div>
    </div>
  );
}
