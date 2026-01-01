import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Putra Indika Malik Hakim | Full Stack Developer Portfolio",
  description:
    "Computer Engineering student specializing in Backend Development. Passionate about building scalable applications with modern technologies.",
  keywords: [
    "Full Stack Developer",
    "Backend Developer",
    "Computer Engineering",
    "Web Development",
    "Mobile Development",
  ],
  authors: [{ name: "Putra Indika Malik Hakim" }],
  openGraph: {
    title: "Putra Indika Malik Hakim | Full Stack Developer",
    description:
      "Computer Engineering student specializing in Backend Development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
