import { plural } from "@/lib/format";
import type { Room } from "@/types/listing";
import StarRating from "./StarRating";

const RoomHeader = ({ room }: { room: Room }) => (
  <header className="border-b border-neutral-200 py-6">
    <h1 className="text-2xl font-semibold sm:text-3xl">{room.title}</h1>
    <p className="mt-2 flex flex-wrap items-center gap-x-2 text-[15px]">
      <StarRating rating={room.rating} className="font-semibold" />
      <span aria-hidden="true">·</span>
      <span className="font-semibold underline underline-offset-2">{room.reviewCount} reseñas</span>
      <span aria-hidden="true">·</span>
      <span className="text-neutral-600">{room.location}</span>
    </p>
    <p className="mt-1 text-neutral-600">
      {[
        plural(room.maxGuests, "huésped", "huéspedes"),
        plural(room.bedrooms, "habitación", "habitaciones"),
        plural(room.beds, "cama", "camas"),
        plural(room.baths, "baño", "baños"),
      ].join(" · ")}
    </p>
  </header>
);

export default RoomHeader;
