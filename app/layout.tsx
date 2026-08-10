import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trailer Dawgz — Exclusive Qualified Leads for Trailer Dealers",
  description:
    "Trailer Dawgz delivers exclusive, ready-to-buy leads to dump trailer and hauling trailer dealers. We run the ads, our AI books the appointments, and you close the deals. Free CRM and free website included.",
  openGraph: {
    title: "Trailer Dawgz — Exclusive Qualified Leads for Trailer Dealers",
    description:
      "Exclusive, ready-to-buy trailer buyers delivered to your lot. AI handles the follow-up and appointment setting. Free CRM. Free website. Book your free strategy call.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
