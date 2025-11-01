import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NextJS Exercise",
    description: "Code exercise for NextJS",
    keywords: ['NextJS', 'React', 'JavaScript', 'TypeScript', 'Web Development'],
    authors: [{name: 'gitaoh', url: 'https://gitaoh.github.io'}],
    openGraph: {
        title: 'NextJS Exercise',
        description: 'Code exercise for NextJS',
        url: 'https://gitaoh.github.io',
        siteName: 'NextJS Exercise',
        images: [
            {
                url: 'https://gitaoh.github.io/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'NextJS Exercise',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NextJS Exercise',
        description: 'Code exercise for NextJS',
        images: ['https://gitaoh.github.io/twitter-image.jpg'],
    },
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
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
