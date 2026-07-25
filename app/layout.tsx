import "./globals.css";
import "./page.css"; // <--- IMPORTA TU CSS PRINCIPAL AQUÍ
import Menu from "@/components/menu";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
