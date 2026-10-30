"use client";

import { useState } from "react";
import { HeartIcon } from "./icons";

const FavoriteButton = ({ className = "" }: { className?: string }) => {
  const [saved, setSaved] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setSaved((value) => !value)}
      aria-pressed={saved}
      aria-label={saved ? "Quitar de favoritos" : "Guardar en favoritos"}
      className={`transition active:scale-90 ${className}`}
    >
      <HeartIcon
        className={`size-7 drop-shadow ${saved ? "fill-rose-500 text-white" : "fill-black/40 text-white"}`}
      />
    </button>
  );
};

export default FavoriteButton;
