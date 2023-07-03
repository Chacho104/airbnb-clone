import { Nunito } from "next/font/google";

import "./globals.css";

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
