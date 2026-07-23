import "./globals.css";
import Menu from "@/components/menu";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <Menu />
        {children}  {/* <--- SI ESTO NO ESTÁ, NADA SE VERÁ */}
        <Footer />
      </body>
    </html>
  );
}