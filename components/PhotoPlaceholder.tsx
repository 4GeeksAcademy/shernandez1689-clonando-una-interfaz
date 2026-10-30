import type { Photo } from "@/types/listing";
import { HouseIcon } from "./icons";

interface PhotoPlaceholderProps {
  photo: Photo;
  className?: string;
  showLabel?: boolean;
}

export default function PhotoPlaceholder({ photo, className = "", showLabel = false }: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Foto: ${photo.label}`}
      className={`flex flex-col items-center justify-center gap-2 text-white/80 ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(${photo.hue} 70% 78%), hsl(${(photo.hue + 40) % 360} 60% 58%))`,
      }}
    >
      <HouseIcon className="size-12" strokeWidth={1.5} />
      {showLabel && <span className="text-sm font-semibold">{photo.label}</span>}
    </div>
  );
}
