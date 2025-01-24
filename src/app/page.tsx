"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero text-center py-64 h-60 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('img/home.jpg')" }}>
        <h1 className="text-3xl text-white">
          <span className="text-6xl text-[#FF709D]">Zooxial</span> conectando mascotas con el mejor cuidado.
        </h1>

        <div className="form mt-4">
          <select className="p-2 m-2 border border-gray-300">
            <option>Estado</option>
            <option>Quintana Roo</option>
            <option>Yucatan</option>
          </select>
          <select className="p-2 m-2 border border-gray-300">
            <option>Mascota</option>
            <option>Perro</option>
            <option>Gato</option>
          </select>
          <select className="p-2 m-2 border border-gray-300">
            <option>Servicio</option>
            <option>Veterinarias</option>
            <option>Veterinarios</option>
            <option>Alimentos</option>
            <option>Accesorios</option>
            <option>Alertas</option>
          </select>
          <button className="p-2 m-2 bg-[#FF709D] text-white rounded hover:bg-[#16a085]">
            Buscar
          </button>
        </div>
      </div>

      <section className="services flex justify-around py-8">
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2">
          <h3 className="text-[#FF709D] text-xl">Veterinarias</h3>
          <b className="w-full">Cuidamos de tu mascota como parte de tu familia.</b>
          <p>
          Nuestros veterinarios están comprometidos con la salud y el bienestar de tu mascota, brindando atención médica de calidad y amor incondicional.</p>
        </div>
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2">
          <h3 className="text-[#FF709D] text-xl">Veterinarios</h3>
          <b>Profesionales dedicados a la salud animal.</b>
          <p>
          Nuestro equipo de veterinarios expertos está aquí para ofrecerte diagnósticos precisos y tratamientos efectivos, siempre con un enfoque personalizado para tu mascota.</p>
        </div>
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2">
          <h3 className="text-[#FF709D] text-xl">Alimentos</h3>
          <b>Nutrición de calidad para cada etapa de tu mascota.</b>
          <p>
          Te ofrecemos una variedad de alimentos especializados para satisfacer las necesidades nutricionales de tu mascota, desde cachorros hasta adultos mayores.</p>
        </div>
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2">
          <h3 className="text-[#FF709D] text-xl">Accesorios</h3>
          <b>Lo mejor para tu mascota.</b>
          <p>
          Encuentra en nuestra tienda los accesorios más modernos y cómodos, desde camas y juguetes hasta collares y arneses, todo lo que tu mascota necesita para estar feliz y saludable.</p>
        </div>
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2">
          <h3 className="text-[#FF709D] text-xl">Alertas</h3>
          <b>Mantén a tu mascota segura.</b>
          <p>
          Recibe notificaciones y alertas sobre vacunación, citas de control y otros eventos importantes para el bienestar de tu mascota, todo al alcance de tu mano.</p>
        </div>
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2">
          <h3 className="text-[#FF709D] text-xl">Mis mascotas</h3>
          <b>Comparte momentos especiales con tu mascota.</b>
          <p>
          Únete a nuestra comunidad y comparte fotos, historias y consejos sobre tus mascotas. Conéctate con otros amantes de los animales y forma parte de nuestra red social.</p>
        </div>
      </section>

      
    </>
  );
}