"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero text-center py-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('img/home.jpg')" }}>
        <h1 className="text-3xl text-[#1abc9c]">
          Zooxial conectando mascotas con el mejor cuidado.
        </h1>
        <p className="text-gray-700">Tu mejor amigo.</p>

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
          <button className="p-2 m-2 bg-[#1abc9c] text-white rounded hover:bg-[#16a085]">
            Buscar
          </button>
        </div>
      </div>

      <section className="services flex flex-wrap justify-around py-8">
        <div className="service w-60 text-center p-4 border border-gray-300 rounded m-2">
          <h3 className="text-[#1abc9c]">Veterinarias</h3>
          <p><b>Cuidamos de tu mascota como parte de tu familia.</b>
          Nuestros veterinarios están comprometidos con la salud y el bienestar de tu mascota, brindando atención médica de calidad y amor incondicional.</p>
        </div>
        <div className="service w-60 text-center p-4 border border-gray-300 rounded m-2">
          <h3 className="text-[#1abc9c]">Veterinarios</h3>
          <p><b>Profesionales dedicados a la salud animal.</b>
          Nuestro equipo de veterinarios expertos está aquí para ofrecerte diagnósticos precisos y tratamientos efectivos, siempre con un enfoque personalizado para tu mascota.</p>
        </div>
        <div className="service w-60 text-center p-4 border border-gray-300 rounded m-2">
          <h3 className="text-[#1abc9c]">Alimentos</h3>
          <p><b>Nutrición de calidad para cada etapa de tu mascota.</b>
          Te ofrecemos una variedad de alimentos especializados para satisfacer las necesidades nutricionales de tu mascota, desde cachorros hasta adultos mayores.</p>
        </div>
        <div className="service w-60 text-center p-4 border border-gray-300 rounded m-2">
          <h3 className="text-[#1abc9c]">Accesorios</h3>
          <p><b>Lo mejor para tu mascota.</b>
          Encuentra en nuestra tienda los accesorios más modernos y cómodos, desde camas y juguetes hasta collares y arneses, todo lo que tu mascota necesita para estar feliz y saludable.</p>
        </div>
        <div className="service w-60 text-center p-4 border border-gray-300 rounded m-2">
          <h3 className="text-[#1abc9c]">Alertas</h3>
          <p><b>Mantén a tu mascota segura.</b>
          Recibe notificaciones y alertas sobre vacunación, citas de control y otros eventos importantes para el bienestar de tu mascota, todo al alcance de tu mano.</p>
        </div>
        <div className="service w-60 text-center p-4 border border-gray-300 rounded m-2">
          <h3 className="text-[#1abc9c]">Mis mascotas</h3>
          <p><b>Comparte momentos especiales con tu mascota.</b>
          Únete a nuestra comunidad y comparte fotos, historias y consejos sobre tus mascotas. Conéctate con otros amantes de los animales y forma parte de nuestra red social.</p>
        </div>
      </section>

      
    </>
  );
}