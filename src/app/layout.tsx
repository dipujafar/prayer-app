import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Urbanist } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import antTheme from "@/theme/antTheme";

// custom font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

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
    <html lang="en">
      <body
        style={{ backgroundColor: "white" }}
        className={`${poppins.className} ${urbanist.variable}`}
      >
        <AntdRegistry>
          <ConfigProvider theme={antTheme}>
          {children}
          </ConfigProvider>
          </AntdRegistry>
          
      </body>
    </html>
  );
}
