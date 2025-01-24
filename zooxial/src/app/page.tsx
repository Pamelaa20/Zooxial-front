"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Zooxial</h1>
      <Link href="/veterinarias" className="text-blue-500 underline mt-4">
        Veterinarias
      </Link>
    </div>
  );
}