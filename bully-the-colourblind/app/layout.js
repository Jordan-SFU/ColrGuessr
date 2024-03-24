import { Inter } from "next/font/google";
import { Rubik_Scribble } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rubik_scribble = Rubik_Scribble({ subsets: ["latin"], weight: '400' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik_scribble.className}>
      <body>{children}</body>
    </html>
  );
}
