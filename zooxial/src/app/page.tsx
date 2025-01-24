"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Página Principal</h1>
      <Link href="/about" className="text-blue-500 underline mt-4">
        Ir a la página Acerca de
      </Link>
    </div>
  );
}