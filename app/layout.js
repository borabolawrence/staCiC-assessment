import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Technical Worksheet",
  description: "Technical Worksheet by Lawrence Borabo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-[#f3f4f6]`}>
        {children}
      </body>
    </html>
  );
}
