import { Comfortaa } from "next/font/google";
import "./globals.scss";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://klgrch.ru/"),
  themeColor: "#649ceb",
  title: "Nikolay Gerasimov - WEB-developer",
  description: "Create web-sites for your and your bussines with love.",
  keywords: [
    "web-developer",
    "разработчик",
    "frontend",
    "klgrch",
    "Nikolay Gerasimov",
    "Николай Герасимов",
    "разработка сайтов",
    "react",
    "javascript",
    "next.js",
  ],
  openGraph: {
    title: "Nikolay Gerasimov - WEB-developer",
    description: "Create web-sites for your and your bussines with love.",
    url: "https://klgrch.ru",
    siteName: "klgrch.ru",
    // images: [""],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikolay Gerasimov - WEB-developer",
    description: "Create web-sites for your and your bussines with love.",
    creator: "@klgrch",
    // images: [""],
  },
  verification: {
    yandex: "cb9e881f40c99ab5",
    google: "HCqet60VDcOa35s8WwgmwNAG3mutvCIgwtwIf0lrykA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={comfortaa.className}>{children}</body>
    </html>
  );
}
