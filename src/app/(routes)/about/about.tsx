import { Config } from "@/config";
import { getBaseURL } from "@/utils";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const BASE_URL = await getBaseURL();

  return {
    metadataBase: new URL(BASE_URL),
    title: `About Us | ${Config.title}`,
    description:
      "Learn more about AgroPulseBlog, your ultimate source for farming insights, expert advice, and the latest trends in agriculture.",
  };
}

export default function AboutHome() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          About Us
        </h1>
        <p className="text-lg text-black mb-4">
          Welcome to <strong>{Config.title} </strong>, your ultimate resource
          for staying updated with the latest farming insights. Our mission is
          to support farmers and agricultural enthusiasts by providing expert
          advice, tips, and the latest trends in agriculture. We believe that
          every farmer deserves access to quality information that can help
          enhance their agricultural practices and boost productivity.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6 mb-4">
          What You'll Find on Our Blog
        </h2>
        <ul className="list-disc list-inside text-black dark:text-white space-y-2">
          <li>
            <strong>
              Expert Advice on Crop Cultivation and Livestock Farming:
            </strong>{" "}
            Gain valuable insights on improving your farming techniques, whether
            you focus on crops or livestock.
          </li>
          <li>
            <strong>Latest Trends in Agricultural Technology:</strong> Stay
            ahead of the curve with updates on the latest innovations and
            technological advancements in the farming industry.
          </li>
          <li>
            <strong>Sustainable Farming Practices:</strong> Learn about
            sustainable methods to ensure long-term productivity and
            environmental health.
          </li>
          <li>
            <strong>Market Trends and Analysis:</strong> Get the latest
            information on market trends to make informed decisions for your
            agricultural business.
          </li>
          <li>
            <strong>Tips and Tricks for Farmers:</strong> Practical tips to help
            you manage your farm more efficiently and effectively.
          </li>
        </ul>

        <p className="text-lg text-black dark:text-white mt-6">
          Our team comprises experienced agricultural experts and dedicated
          writers who are passionate about sharing their knowledge and helping
          you succeed in your farming endeavors. We are committed to providing
          accurate, up-to-date information to help you stay informed and thrive
          in the agricultural sector.
        </p>

        <p className="text-lg text-black dark:text-white mt-6">
          If you have any questions or comments, please feel free to{" "}
          <a href="/contact" className="text-primary underline">
            contact us
          </a>
          .
        </p>

        <p className="text-lg  text-black dark:text-white mt-6 text-center">
          Stay connected with AgroPulseBlog, and let's grow together!
        </p>
      </div>
    </div>
  );
}
