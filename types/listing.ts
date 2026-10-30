export type CategoryId =
  | "todos"
  | "playa"
  | "mansiones"
  | "tendencias"
  | "cabanas"
  | "piscinas"
  | "campo"
  | "vistas";

export interface Category {
  id: CategoryId;
  label: string;
  icon: string;
}

export interface Photo {
  label: string;
  url: string;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface Host {
  name: string;
  yearsHosting: number;
  isSuperhost: boolean;
}

/** Alojamiento tal como aparece en las tarjetas de Inicio y Catálogo. */
export interface Listing {
  id: string;
  title: string;
  location: string;
  category: Exclude<CategoryId, "todos">;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  photos: Photo[];
}

/** Habitación completa que muestra la página de detalle `/rooms/[id]`. */
export interface Room extends Listing {
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  description: string;
  amenities: Amenity[];
  host: Host;
}

export type SortOrder = "asc" | "desc";
