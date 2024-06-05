import { Config } from "@/config";
import React from "react";

export default function TramsHome() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 my-4 bg-background dark:bg-secondary shadow-md rounded-md text-xs md:text-sm">
      <h3 className="text-lg md:text-2xl font-semibold text-primary">
        Terms And Conditions
      </h3>
      <p className="my-3">
        Before using {Config.title}, please read these Terms and Conditions. By
        using this website you agree to be bound by these Terms and Conditions.
      </p>

      <h5 className="text-lg font-semibold my-5">Usage:</h5>
      <div className="my-4">
        <li>{Config.title} is an blog website.</li>
        <li>
          It is not necessary to verify the information received from us, then
          if in doubt, seek advice from an experienced person.
        </li>
        <li>
          You may use this website to collect information for educational
          purposes.
        </li>
        <li>
          You may not use any information on this website for any other purpose.
        </li>
      </div>

      <h5 className="text-lg font-semibold my-5">Permission:</h5>
      <div className="my-4">
        <li>
          You must obtain our permission before sharing any information from
          this website on any other website or in any other medium.
        </li>
        <li>
          You must obtain our permission before you translate any information on
          this website.
        </li>
      </div>

      <h5 className="text-lg font-semibold my-5">Exemption:</h5>
      <div className="my-4">
        <li>
          Does not guarantee the accuracy of the information shared on this
          website.
        </li>
        <li>
          shall not be liable for any loss you may incur by using this website.
        </li>
      </div>

      <h5 className="text-lg font-semibold my-5">Change:</h5>
      <div className="my-4">
        <li>
          {Config.title} may change these Terms and Conditions at any time.
        </li>
        <li>
          Changed Terms and Conditions will be effective upon publication on
          this website.
        </li>
      </div>

      <h5 className="text-lg font-semibold my-5">Contact Us</h5>
      <p className="my-3">
        If you have any questions about these Terms and Conditions, please do
        not hesitate to contact us at email address.
      </p>
      <p className="my-3 font-semibold">Email: {Config.contactEmail}</p>
    </div>
  );
}
