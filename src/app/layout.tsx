import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { unstable_ViewTransition as ViewTransition } from "react";

const fontInter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hans Kristian Reynaldi | me",
  description: "Some things about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontInter.className} bg-background flex max-h-screen min-h-screen flex-col items-center antialiased selection:bg-neutral-600 selection:text-neutral-100 dark:selection:bg-neutral-100 dark:selection:text-neutral-600`}
      >
        <ViewTransition>
          <main className="h-fit max-h-screen">
            <div className="relative mx-auto h-fit w-screen [&>article]:mx-auto px-8 pt-10 pb-10 md:max-w-md md:pb-24 md:pt-24 lg:max-w-xl lg:pb-24 xl:max-w-2xl xl:pb-24">
              <Navbar />
              {children}
            </div>
          </main>
        </ViewTransition>
      </body>
    </html>
  );
}
