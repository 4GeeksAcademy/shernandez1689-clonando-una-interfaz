import Image from "next/image";
import type { Photo } from "@/types/listing";

interface ListingPhotoProps {
  photo: Photo;
  alt: string;
  /** Ancho que ocupa la foto en cada breakpoint, para que next/image elija el tamaño. */
  sizes: string;
  className?: string;
  eager?: boolean;
}

/** Foto que rellena su contenedor; el fondo gris se ve mientras carga. */
const ListingPhoto = ({ photo, alt, sizes, className = "", eager = false }: ListingPhotoProps) => (
  <div className={`relative overflow-hidden bg-neutral-200 ${className}`}>
    <Image
      src={photo.url}
      alt={alt}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className="object-cover"
    />
  </div>
);

export default ListingPhoto;
