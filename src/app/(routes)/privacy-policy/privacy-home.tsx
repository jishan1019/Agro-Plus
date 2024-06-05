import { Config } from "@/config";
import React from "react";

export default function PrivacyHome() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 my-4 bg-background dark:bg-secondary shadow-md rounded-md text-xs md:text-sm">
      <h3 className="text-lg md:text-2xl font-semibold text-primary">
        Privacy Policy
      </h3>
      <p className="my-3">
        This page is used to inform visitors regarding our policies with the
        collection, use, and disclosure of Personal Information if anyone
        decided to use our Service.
      </p>
      <p className="my-3">
        If you choose to use our Service, then you agree to the collection and
        use of information in relation to this policy. The Personal Information
        that we collect is used for providing and improving the Service. We will
        not use or share your information with anyone except as described in
        this Privacy Policy.
      </p>
      <p className="my-3">
        The terms used in this Privacy Policy have the same meanings as in our
        Terms and Conditions, which is accessible at <b>{Config.title}</b>{" "}
        unless otherwise defined in this Privacy Policy.
      </p>

      <h5 className="text-lg font-semibold my-5">
        Information Collection and Use
      </h5>
      <p className="my-3">
        For a better experience, while using our Service, we may require you to
        provide us with certain personally identifiable information, including
        but not limited to Name, Email Address, Device IDs. The information that
        we request will be retained by <b>{Config.title}</b> and used as
        described in this privacy policy.
      </p>
      <p className="my-3">
        The app does use third party services that may collect information used
        to identify you
      </p>
      <div className="my-3">
        <p>
          The app does use third party services that may collect information
          used to identify you
        </p>
        <div className="mt-4 font-semibold">
          <li>Google Analytics for Firebase</li>
          <li>AdSense</li>
        </div>
      </div>

      <h5 className="text-lg font-semibold my-5">Log Data</h5>
      <p className="my-3">
        We want to inform you that whenever you use our Service, in a case of an
        error in the app we collect data and information (through third party
        products) on your phone called Log Data. This Log Data may include
        information such as your device Internet Protocol (“IP”) address, device
        name, operating system version, the configuration of the app when
        utilizing our Service, the time and date of your use of the Service, and
        other statistics.
      </p>

      <h5 className="text-lg font-semibold my-5">Cookies</h5>
      <p className="my-3">
        Cookies are files with a small amount of data that are commonly used as
        anonymous unique identifiers. These are sent to your browser from the
        websites that you visit and are stored on your device's internal memory.
      </p>
      <p className="my-3">
        This Service does not use these “cookies” explicitly. However, the app
        may use third party code and libraries that use “cookies” to collect
        information and improve their services. You have the option to either
        accept or refuse these cookies and know when a cookie is being sent to
        your device. If you choose to refuse our cookies, you may not be able to
        use some portions of this Service.
      </p>

      <h5 className="text-lg font-semibold my-5">Service Providers</h5>
      <div className="my-3">
        <p>
          We may employ third-party companies and individuals due to the
          following reasons:
        </p>
        <div className="my-4 font-semibold">
          <li>To facilitate our Service;</li>
          <li>To provide the Service on our behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist us in analyzing how our Service is used</li>
        </div>
        <p>
          We want to inform users of this Service that these third parties have
          access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>
      </div>

      <h5 className="text-lg font-semibold my-5">Security</h5>
      <p className="my-3">
        We value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and we cannot guarantee
        its absolute security.
      </p>

      <h5 className="text-lg font-semibold my-5">Links to Other Sites</h5>
      <p className="my-3">
        This Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by us. Therefore, we strongly advise you
        to review the Privacy Policy of these websites. We have no control over
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </p>

      <h5 className="text-lg font-semibold my-5">Children’s Privacy</h5>
      <p className="my-3">
        These Services do not address anyone under the age of 13. We do not
        knowingly collect personally identifiable information from children
        under 13. In the case we discover that a child under 13 has provided us
        with personal information, we immediately delete this from our servers.
        If you are a parent or guardian and you are aware that your child has
        provided us with personal information, please contact us so that we will
        be able to do necessary actions.
      </p>

      <h5 className="text-lg font-semibold my-5">
        Changes to This Privacy Policy
      </h5>
      <p className="my-3">
        We may update our Privacy Policy from time to time. Thus, you are
        advised to review this page periodically for any changes. We will notify
        you of any changes by posting the new Privacy Policy on this page.{" "}
      </p>
      <p className="my-3 font-semibold">
        This policy is effective as of {Config.policyIssueDate}
      </p>

      <h5 className="text-lg font-semibold my-5">Data Deletion Right</h5>
      <p className="my-3">
        You have the right to access, rectify, object to, or erase the data
        maintained by us. You may request a change / delete to your personal
        data by contacting us by referring the issue via email
      </p>
      <p className="my-3 font-semibold">Email: {Config.contactEmail}</p>
      <p className="my-3">
        If you believe our processing of your personal data infringes data
        protection laws, you have a legal right to initiate a complaint with a
        supervisory authority. Don't hesitate to contact us if you find any
        issue.
      </p>

      <h5 className="text-lg font-semibold my-5">Contact Us</h5>
      <p className="my-3">
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us at 
      </p>
      <p className="my-3 font-semibold">Email: {Config.contactEmail}</p>
    </div>
  );
}
