import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { TodoContextProvider } from "@/context/TodoContext";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
});

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
      <body className={nunito.className}>
        <TodoContextProvider>
          {children}
        </TodoContextProvider>
      </body>
    </html>
  );
}
