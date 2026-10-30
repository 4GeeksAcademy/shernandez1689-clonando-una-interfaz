import type { Room } from "@/types/listing";
import AmenitiesGrid from "./AmenitiesGrid";
import BookingCard from "./BookingCard";
import HostRow from "./HostRow";
import PhotoGallery from "./PhotoGallery";
import RoomHeader from "./RoomHeader";

const RoomContent = ({ room }: { room: Room }) => (
  <>
    <PhotoGallery photos={room.photos} title={room.title} />

    <div className="px-4 sm:px-0 lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
      <div>
        <RoomHeader room={room} />

        <section className="border-b border-neutral-200 py-6" aria-label="Anfitrión">
          <HostRow host={room.host} />
        </section>

        <section className="border-b border-neutral-200 py-6" aria-labelledby="about-title">
          <h2 id="about-title" className="mb-3 text-xl font-semibold">Acerca de este espacio</h2>
          <p className="leading-relaxed text-neutral-700">{room.description}</p>
        </section>

        <section className="py-8" aria-labelledby="amenities-title">
          <h2 id="amenities-title" className="mb-6 text-xl font-semibold">Lo que ofrece este lugar</h2>
          <AmenitiesGrid amenities={room.amenities} />
        </section>
      </div>

      <aside className="pt-2 lg:pt-8">
        <div className="lg:sticky lg:top-28">
          <BookingCard room={room} />
        </div>
      </aside>
    </div>
  </>
);

export default RoomContent;
