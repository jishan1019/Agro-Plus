import { Config } from "@/config";
import { getBaseURL } from "@/utils";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const BASE_URL = await getBaseURL();

  return {
    metadataBase: new URL(BASE_URL),
    title: `Contact Us | ${Config.title}`,
    description:
      "Get in touch with the AgroPulseBlog team for any questions or comments",
  };
}

export default function ContactHome() {
  return (
    <div className="max-w-md mx-auto bg-background border border-primary p-6 rounded-lg shadow-md mt-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-4">
        Contact Us
      </h1>
      <p className="text-lg text-black dark:text-white text-center mb-6">
        If you have any questions or comments, please feel free to reach out to
        us.
      </p>
      <p className="text-lg text-center">
        <a
          href={`mailto:${Config.contactEmail}`}
          className="text-primary underline"
        >
          {Config.contactEmail}
        </a>
      </p>
    </div>
  );
}
