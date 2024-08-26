import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TodoContextProvider } from "@/context/TodoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo list",
  description: "Sistema de criação de tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TodoContextProvider>
          {children}
        </TodoContextProvider>
      </body>
    </html>
  );
}
