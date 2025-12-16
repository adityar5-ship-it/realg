import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

// export const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistInter = Geist_Mono({
  variable: "--font-geist-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "REALG Evals - Realistic Evaluations for Agents Leaderboard",
  description: "Realistic Evaluations for Agents Leaderboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
