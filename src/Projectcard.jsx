import React, { useState } from "react";

function Projectcard({ bannerImg, title, main }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className={
          "{`w-80 h-[500px] bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300`} "
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={setIsHovered(false)}
      >
        {/* In the above line some is missing */}
        <div className="w-full h-[260px">
          <img
            src={bannerImg}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-300">{main}</p>
        <div className="mt-2 p-2 md:p-4 flex gap-10 md:gap-12">
          <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreffer">
            <button
              className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300
                hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r from-purple-500 to-pink-600"
            >
              Github
            </button>
          </a>
          <a href="YOUR_VERCEL_URL" target="_blank" rel="noopener noreffer">
            <button
              className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r from-purple-500 to-pink-600"
            >
              Deploy
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Projectcard;
