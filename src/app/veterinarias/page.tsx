import Link from "next/link";
import Map from '../components/Map';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zooxial App",
  description: "Zooxial app",
};

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Veterinarias</h1>
      <section className="services flex justify-around py-8">
        <div className="service w-1/2 text-justify p-4 border bg-white border-gray-300 rounded-md m-2">
          <h3 className="text-[#FF709D] text-xl">Veterinarias</h3>
          <b className="w-full">Cuidamos de tu mascota como parte de tu familia.</b>
          <p>
          Nuestros veterinarios están comprometidos con la salud y el bienestar de tu mascota, brindando atención médica de calidad y amor incondicional.</p>
        </div>
        <div className="service w-1/2 text-justify p-4 border bg-white border-gray-300 rounded-md m-2">
          <Map />
        </div>
      </section>
      <Link href="/" className="text-blue-500 underline mt-4">
        Volver a la Página Principal
      </Link>
    </div>
  );
}
