"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function Home_notlogged() {
  const [visibleDivs, setVisibleDivs] = useState(7); // Número inicial de divs visibles
  const circleSize = 192; // Tamaño fijo para los círculos
  const gapSize = 24; // Espaciado entre círculos

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth - 32; // Ancho total menos márgenes
      const maxDivs = Math.floor(containerWidth / (circleSize + gapSize)); // Calcular cuántos divs caben
      setVisibleDivs(Math.min(maxDivs, 7)); // Ajustar el número visible al máximo de 7
    };

    handleResize(); // Ajuste inicial
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const divs = Array(7)
    .fill(null)
    .map((_, index) => {
      if (index >= visibleDivs) return null; // Ocultar divs si no son visibles
      return (
        <div
          key={index}
          className="relative rounded-full overflow-hidden flex items-center justify-center"
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
          }}
        >
          {/* Imagen de Ariana */}
          <Image
            src="/images/ariana.jpg"
            alt="Imagen de Ariana"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-full"
            priority
          />
        </div>
      );
    });

  return (
    <div className="bg-gradient-to-b from-secondaryColor to-black rounded-lg p-4 max-h-[77vh] font-spotiBold overflow-hidden">
      <button className="mt-0 ml-2 text-2xl font-spotiBold hover:underline">
        Artistas populares
      </button>

      <div className="flex justify-end -mt-6 mr-3 text-sm">
        <button className="hover:underline">Mostrar todos</button>
      </div>

      {/* Contenedor de los botones circulares */}
      <div className="flex mt-6 ml-2 gap-6 max-h-[61vh] flex-nowrap">
        {divs}
      </div>
    </div>
  );
}

export default Home_notlogged;
