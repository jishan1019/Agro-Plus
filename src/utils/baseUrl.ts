// "use server";

// import { headers } from "next/headers";

export function getBaseURL() {
  //   const host = headers().get("host");

  //   const baseURL =
  //     host === "localhost:3000" ? `http://${host}` : `https://${host}`;

  const baseURL = "http://serial.appslabbd.buzz";

  return baseURL;
}
