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

/** Placeholder de foto: una etiqueta y un tono (0–360) para el degradado. */
export interface Photo {
  label: string;
  hue: number;
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

export interface Listing {
  id: string;
  title: string;
  location: string;
  category: Exclude<CategoryId, "todos">;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  description: string;
  photos: Photo[];
  amenities: Amenity[];
  host: Host;
}

export type SortOrder = "asc" | "desc";
