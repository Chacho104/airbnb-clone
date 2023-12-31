import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import StartAuthModal from "./components/modals/StartAuthModal";

export const metadata = {
  title: "Vacation Homes & Condo Rentals",
  description: "Cloning the amazing Airbnb UI and functionalities!",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StartAuthModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
