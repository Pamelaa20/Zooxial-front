"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Veterinarias</h1>
      <Link href="/" className="text-blue-500 underline mt-4">
        Volver a la Página Principal
      </Link>
    </div>
  );
}
