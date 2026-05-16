import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "HyperWork B2B Workspace Solutions",
  description:
    "Landing page B2B giới thiệu dịch vụ thiết kế, nâng cấp và setup văn phòng của HyperWork."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
