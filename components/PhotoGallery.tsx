"use client";

import { useState } from "react";
import type { Photo } from "@/types/listing";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import PhotoPlaceholder from "./PhotoPlaceholder";

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => setIndex((next + photos.length) % photos.length);

  return (
    <section aria-label="Galería de fotos" className="relative overflow-hidden sm:rounded-2xl">
      <PhotoPlaceholder
        photo={photos[index]}
        showLabel
        className="aspect-[4/3] w-full sm:aspect-[16/9]"
      />

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow transition hover:scale-105 hover:bg-white"
      >
        <ChevronLeftIcon className="size-4" strokeWidth={3} />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Foto siguiente"
        className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow transition hover:scale-105 hover:bg-white"
      >
        <ChevronRightIcon className="size-4" strokeWidth={3} />
      </button>

      <span className="absolute bottom-4 right-4 rounded-md bg-black/60 px-2.5 py-1 text-xs font-semibold text-white" aria-live="polite">
        {index + 1} / {photos.length}
      </span>

      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-1.5">
        {photos.map((photo, i) => (
          <button
            key={photo.label}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ver foto ${i + 1}: ${photo.label}`}
            aria-current={i === index}
            className={`size-1.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
