// components/Carousel.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

interface Imagen {
  src: string;
  alt: string;
}

interface CarouselProps {
  imagenes: Imagen[];
}

export default function Carousel({ imagenes }: CarouselProps) {
  const [index, setIndex] = useState(0);

  if (!imagenes || imagenes.length === 0) return null;

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="about-image-wrapper carousel-contenedor">
      {/* Botón Izquierdo */}
      <button onClick={anterior} className="carousel-btn btn-izq" aria-label="Anterior">
        ‹
      </button>

      {/* Imagen Actual */}
      <Image
        src={imagenes[index].src}
        alt={imagenes[index].alt}
        className="img-border-neon"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Botón Derecho */}
      <button onClick={siguiente} className="carousel-btn btn-der" aria-label="Siguiente">
        ›
      </button>

      {/* Indicadores (Puntitos inferiores) */}
      <div className="carousel-dots">
        {imagenes.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "dot-activo" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}