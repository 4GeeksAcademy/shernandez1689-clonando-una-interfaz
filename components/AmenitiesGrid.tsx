import type { Amenity } from "@/types/listing";

export default function AmenitiesGrid({ amenities }: { amenities: Amenity[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
      {amenities.map((amenity) => (
        <li key={amenity.label} className="flex items-center gap-4">
          <span className="w-7 text-center text-2xl" aria-hidden="true">
            {amenity.icon}
          </span>
          {amenity.label}
        </li>
      ))}
    </ul>
  );
}
