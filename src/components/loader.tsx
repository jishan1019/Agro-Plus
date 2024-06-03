import React from "react";
import { AiOutlineLoading3Quarters } from "@/constant/icons";

export default function Loading({ className }: { className: string }) {
  return (
    <div className={className}>
      <AiOutlineLoading3Quarters className="text-primary text-2xl animate-spin" />
      <p className="font-semibold mt-2 text-primary">Loading...</p>
    </div>
  );
}
