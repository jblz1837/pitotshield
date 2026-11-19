import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
export const metadata: Metadata = {
 title: "PitotShield V2™ SmartCovers™ | DeGroff Aviation Technologies™",
 description: "Stop Covered Pitot Events (COPEs). Explore fail-safe heat-activated pitot cover technology for aircraft production, maintenance and operations.",
 metadataBase: new URL("https://pitotshields.com"),
 alternates: { canonical: "/" },
 robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className="antialiased">{children}<Analytics /></body></html>; }
