"use client";

import './globals.css'

import { ReactNode } from "react";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster as ShadcnToaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
        <body>
        <TooltipProvider>
            <ShadcnToaster />
            <SonnerToaster />
            {children}
        </TooltipProvider>
        </body>
        </html>
    );
}
