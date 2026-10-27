import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://samiarts.co.in"),
  title: "SAMI ARTS | Premium Printing & Interior Branding Studio",
  description: "Premium 3D customised flex wallpaper, flex banner, vinyl printing and interior branding. Based in Dausa, Rajasthan. Service available across Rajasthan.",
  keywords: ["SAMI ARTS", "3D flex wallpaper", "wallpaper Dausa", "flex printing", "vinyl printing", "interior branding Rajasthan"],
  openGraph: {
    title: "SAMI ARTS — Transform Your Walls Into Masterpieces",
    description: "Premium printing, customised wallpaper and interior branding.",
    url: "https://samiarts.co.in",
    siteName: "SAMI ARTS",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
