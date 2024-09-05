// "use client";
import type { Metadata } from "next";
import "./globals.css";
import { ConfigProvider } from "antd";
// import { StyleProvider } from "@ant-design/cssinjs";
import{Poppins,Urbanist} from "next/font/google"


// custom font 
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500","700"],
  variable: "--font-poppins",
  display: "swap"
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400","500","600", "700"],
  variable: "--font-urbanist",
  display: "swap"
})


export const metadata: Metadata = {
  title: "Prayer App",
  description: "This this official prayer application by lisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <StyleProvider hashPriority="high">
    <html lang="en">
      {/* <ConfigProvider
        theme={{
          components: {
            Input: {
              hoverBorderColor: "#5A015E",
              activeBorderColor: "#5A015E",
            },

          },
        }}
      > */}
        <body style={{ backgroundColor: "white"}} className={`${poppins.className} ${urbanist.variable}`} >{children}</body>
      {/* </ConfigProvider> */}
    </html>
    // </StyleProvider>
  );
}
