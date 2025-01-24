"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="bg-[#2E2847] text-[#C8C3DA] p-4 flex justify-between items-center">
        <div>Zooxial</div>
        <nav>
          <ul className="list-none flex gap-4 m-0">
            <li><a href="#" className="text-[#333] no-underline">Home</a></li>
            <li><a href="#" className="text-[#333] no-underline">Pets</a></li>
            <li><a href="#" className="text-[#333] no-underline">Services</a></li>
            <li><a href="#" className="text-[#333] no-underline">Gallery</a></li>
            <li><a href="#" className="text-[#333] no-underline">About Us</a></li>
            <li><a href="#" className="text-[#333] no-underline">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <div className="hero text-center py-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('img/home.jpg')" }}>
        <h1 className="text-3xl text-[#1abc9c]">
          Zooxial <span className="text-white">Your best Friend</span>
        </h1>
        <p className="text-gray-700">Cuz your best friend is also our best friend.</p>

        <div className="form mt-4">
          <select className="p-2 m-2 border border-gray-300">
            <option>Select your pet</option>
            <option>Dog</option>
            <option>Cat</option>
          </select>
          <select className="p-2 m-2 border border-gray-300">
            <option>Select dog breed</option>
            <option>German Shepherd</option>
            <option>Labrador</option>
          </select>
          <select className="p-2 m-2 border border-gray-300">
            <option>Select symptom</option>
            <option>Not listed here</option>
          </select>
          <button className="p-2 m-2 bg-[#1abc9c] text-white rounded hover:bg-[#16a085]">
            Get Help
          </button>
        </div>
      </div>

      <section className="services flex flex-wrap justify-around py-8">
        <div className="service w-60 text-center p-4 border border-gray-300 rounded m-2">
          <h3 className="text-[#1abc9c]">Medical treatment for disorders</h3>
          <p>Modern medicine has made dogs' lives much more pleasant, and longer for sure.</p>
        </div>
        <div className="service w-60 text-center p-4 border border-gray-300 rounded m-2">
          <h3 className="text-[#1abc9c]">Broken bone & its treatment</h3>
          <p>How often should your dog have a routine physical exam? More often than you think.</p>
        </div>
        <div className="service w-60 text-center p-4 border border-gray-300 rounded m-2">
          <h3 className="text-[#1abc9c]">Treatment for heart diseases</h3>
          <p>Here are tips on finding the right veterinarian for you.</p>
        </div>
        <div className="service w-60 text-center p-4 border border-gray-300 rounded m-2">
          <h3 className="text-[#1abc9c]">Grooming & beauty care for pets</h3>
          <p>In this section we cover many facets of pet grooming.</p>
        </div>
        <div className="service w-60 text-center p-4 border border-gray-300 rounded m-2">
          <h3 className="text-[#1abc9c]">Vaccination for your pets</h3>
          <p>We are prepared to ensure your pets stay healthy and protected.</p>
        </div>
      </section>

      <footer className="footer text-center py-4 bg-gray-100 text-gray-600">
        <p>Working hours from 10 AM to 5 PM Monday to Friday | Help Line Number: (+00) 888.222.444</p>
      </footer>
    </div>
  );
}