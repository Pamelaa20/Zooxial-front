import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero text-center py-64 h-60 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('img/home.jpg')" }}>
        <h1 className="text-3xl text-raisin_black-300 font-bold uppercase"> Conectando mascotas con el mejor cuidado.
        </h1>

        <div className="form mt-4 flex gap-2 flex-row justify-center mt-3">
          <select 
          className="px-5 py-3 text-base outline-none border-atomic_tangerine-500 transition-colors duration-200 ease-in-out"
          style={{
            borderWidth: "calc(var(--border-width, 1) * 1px)",
            borderStyle: "solid",
            borderRadius: "calc(var(--border-radius, 0) * 1px)",
          }}
          >
            <option>Estado</option>
            <option>Quintana Roo</option>
            <option>Yucatan</option>
          </select>
          <select 
          className="px-5 py-3 text-base outline-none border-atomic_tangerine-500 transition-colors duration-200 ease-in-out"
          style={{
            borderWidth: "calc(var(--border-width, 1) * 1px)",
            borderStyle: "solid",
            borderRadius: "calc(var(--border-radius, 0) * 1px)",
          }}
          >
            <option>Mascota</option>
            <option>Perro</option>
            <option>Gato</option>
          </select>
          <select 
          className="px-5 py-3 text-base outline-none border-atomic_tangerine-500 transition-colors duration-200 ease-in-out"
          style={{
            borderWidth: "calc(var(--border-width, 1) * 1px)",
            borderStyle: "solid",
            borderRadius: "calc(var(--border-radius, 0) * 1px)",
          }}
          >
            <option>Servicio</option>
            <option>Veterinarias</option>
            <option>Veterinarios</option>
            <option>Alimentos</option>
            <option>Accesorios</option>
            <option>Alertas</option>
          </select>
          <button className="bg-rusty_red-500 text-white px-8 py-4 rounded-full">
            Buscar
          </button>
        </div>
      </div>

      <section className="services flex justify-center pt-8">
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2 bg-sandy_brown-600">
          <h3 className="text-licorice-500 text-xl font-semibold">Veterinarias</h3>
          <p className="w-full">Cuidamos de tu mascota como parte de tu familia.</p>
          <p>
          Nuestros veterinarios están comprometidos con la salud y el bienestar de tu mascota, brindando atención médica de calidad y amor incondicional.</p>
        </div>
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2 bg-sandy_brown-600">
          <h3 className="text-licorice-500 text-xl font-semibold">Veterinarios</h3>
          <p>Profesionales dedicados a la salud animal.</p>
          <p>
          Nuestro equipo de veterinarios expertos está aquí para ofrecerte diagnósticos precisos y tratamientos efectivos, siempre con un enfoque personalizado para tu mascota.</p>
        </div>
      </section>
      <section className="services flex justify-center py-1">
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2 bg-sandy_brown-600">
          <h3 className="text-licorice-500 text-xl font-semibold">Alimentos</h3>
          <p>Nutrición de calidad para cada etapa de tu mascota.</p>
          <p>
          Te ofrecemos una variedad de alimentos especializados para satisfacer las necesidades nutricionales de tu mascota, desde cachorros hasta adultos mayores.</p>
        </div>
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2 bg-sandy_brown-600">
          <h3 className="text-licorice-500 text-xl font-semibold">Accesorios</h3>
          <p>Lo mejor para tu mascota.</p>
          <p>
          Encuentra en nuestra tienda los accesorios más modernos y cómodos, desde camas y juguetes hasta collares y arneses, todo lo que tu mascota necesita para estar feliz y saludable.</p>
        </div>
      </section>
      <section className="services flex justify-center pb-8">
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2 bg-sandy_brown-600">
          <h3 className="text-licorice-500 text-xl font-semibold">Alertas</h3>
          <p>Mantén a tu mascota segura.</p>
          <p>
          Recibe notificaciones y alertas sobre vacunación, citas de control y otros eventos importantes para el bienestar de tu mascota, todo al alcance de tu mano.</p>
        </div>
        <div className="service w-1/3 text-justify p-4 border bg-white border-gray-300 rounded-md m-2 bg-sandy_brown-600">
          <h3 className="text-licorice-500 text-xl font-semibold">Mis mascotas</h3>
          <p>Comparte momentos especiales con tu mascota.</p>
          <p>
          Únete a nuestra comunidad y comparte fotos, historias y consejos sobre tus mascotas. Conéctate con otros amantes de los animales y forma parte de nuestra red social.</p>
        </div>
      </section>

      
    </>
  );
}