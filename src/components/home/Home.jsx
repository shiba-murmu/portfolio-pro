import React from "react";
import Cv from "../../assets/Shiva.pdf";
function Home() {
  return (
    <>
      <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10">
          <h1 className="text-4xl md:text-7xl font-bold flex leading-normal translate-lighter">
            Hi I'm Shiva
          </h1>
          <p className="text-sm md:text-2xl tracking-tight">
            A passionate software developer crafting efficient, scalable, and
            friendly solutions with cutting-edge technologies.
          </p>
          <a
            href={Cv}
            download="Shiva.pdf"
            className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600
          text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg  hover:from-purple-600 hover: hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
        <div className="md:w-2/4">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="md:w-90 md:h-90 object-cover rounded-full"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
