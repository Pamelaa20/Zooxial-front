"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Veterinarios</h1>
      <section className="services flex justify-around py-8">
        <div className="service w-1/2 text-justify p-4 border bg-white border-gray-300 rounded-md m-2">
          <h3 className="text-[#FF709D] text-xl">Veterinarias</h3>
          <b className="w-full">Cuidamos de tu mascota como parte de tu familia.</b>
          <p>
          Nuestros veterinarios están comprometidos con la salud y el bienestar de tu mascota, brindando atención médica de calidad y amor incondicional.</p>
        </div>
        <div className="service w-1/2 text-justify p-4 border bg-white border-gray-300 rounded-md m-2">
          <h3 className="text-[#FF709D] text-xl">Veterinarios</h3>
          <b>Profesionales dedicados a la salud animal.</b>
          <p>
          Nuestro equipo de veterinarios expertos está aquí para ofrecerte diagnósticos precisos y tratamientos efectivos, siempre con un enfoque personalizado para tu mascota.</p>
        </div>
      </section>
      <Link href="/" className="text-blue-500 underline mt-4">
        Volver a la Página Principal
      </Link>
    </div>
  );
}
