import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Github } from "lucide-react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exam Platform",
  description: "Modern assessment interface built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="border-b border-border px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight">ExamPlatform</span>
              <span className="text-[10px] font-bold uppercase bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                Beta
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/azamxvit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-full font-medium text-sm transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <ThemeToggle />
            </div>
          </nav>
          
          <div className="flex-1 flex flex-col w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}