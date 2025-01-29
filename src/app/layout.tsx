import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "./contexts";

export const metadata: Metadata = {
  title: "Zooxial App",
  description: "Zooxial app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <header className="text-[#252427] p-4 flex justify-between items-center">
            <div><Link href="/" className="text-5xl text-raisin_black-500 font-bold">ZOOxial</Link></div>
            <nav>
              <ul className="list-none flex gap-4 m-0">
                <li><Link href="veterinarias" className="text-raisin_black-500 no-underline font-extrabold tracking-widest uppercase">Veterinarias</Link></li>
                <li><Link href="veterinarios" className="text-raisin_black-500 no-underline font-extrabold tracking-widest uppercase">Veterinarios</Link></li>
                {/*<li><Link href="alimentos" className="text-[#000] no-underline">Alimentos</Link></li>
                <li><Link href="accesorios" className="text-[#000] no-underline">Accesorios</Link></li>
                <li><Link href="alertas" className="text-[#000] no-underline">Alertas</Link></li>
                <li><Link href="mis-mascotas" className="text-[#000] no-underline">Mis mascotas</Link></li>
                <li><Link href="login" className="text-[#000] no-underline">Salir</Link></li> */}
                <li><Link href="login" className="text-raisin_black-500 no-underline font-extrabold tracking-widest uppercase">Login</Link></li>
                <li><Link href="registrar" className="text-raisin_black-500 no-underline font-extrabold tracking-widest uppercase">Registrar</Link></li>
              </ul>
            </nav>
          </header>
          {children}
          <footer className="footer text-center py-4 bg-gray-100 text-gray-600">
            <p>Horario de atencion 9 a 6 PM GTM-6 | Zooxial</p>
          </footer>
          </body>
      </html>
    </AuthProvider>
  );
}
