"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getListingById } from "@/data/listings";
import { plural } from "@/lib/format";
import type { Listing } from "@/types/listing";
import AmenitiesGrid from "./AmenitiesGrid";
import BookingCard from "./BookingCard";
import HostRow from "./HostRow";
import { ArrowLeftIcon, ChevronRightIcon } from "./icons";
import LoadingIndicator from "./LoadingIndicator";
import PhotoGallery from "./PhotoGallery";
import StarRating from "./StarRating";

export default function RoomDetail() {
  const { id } = useParams<{ id: string }>();
  // `key` reinicia el estado (y la carga) si se navega a otra habitación.
  return <RoomLoader key={id} id={id} />;
}

function RoomLoader({ id }: { id: string }) {
  const [room, setRoom] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);

  // Simula la petición de la habitación con el id de la URL.
  useEffect(() => {
    const timer = setTimeout(() => {
      setRoom(getListingById(id) ?? null);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 pb-16 sm:px-6 sm:pt-6 lg:px-10">
      <Breadcrumbs title={room?.title} />
      {loading ? (
        <RoomSkeleton />
      ) : room ? (
        <RoomContent room={room} />
      ) : (
        <div className="px-4 py-20 text-center">
          <p className="text-lg font-semibold">No encontramos este alojamiento</p>
          <Link href="/catalog" className="mt-4 inline-block font-semibold underline underline-offset-4">
            Volver al catálogo
          </Link>
        </div>
      )}
    </main>
  );
}

function Breadcrumbs({ title }: { title?: string }) {
  return (
    <nav aria-label="Ruta de navegación" className="flex items-center gap-3 px-4 py-4 sm:px-0 sm:pt-0">
      <Link
        href="/catalog"
        aria-label="Volver al catálogo"
        className="grid size-9 shrink-0 place-items-center rounded-full hover:bg-neutral-100"
      >
        <ArrowLeftIcon className="size-5" />
      </Link>
      <ol className="flex min-w-0 items-center gap-1.5 text-sm text-neutral-500">
        <li>
          <Link href="/" className="hover:text-neutral-900 hover:underline">Inicio</Link>
        </li>
        <ChevronRightIcon className="size-3.5 shrink-0" aria-hidden="true" />
        <li>
          <Link href="/catalog" className="hover:text-neutral-900 hover:underline">Catálogo</Link>
        </li>
        {title && (
          <>
            <ChevronRightIcon className="size-3.5 shrink-0" aria-hidden="true" />
            <li className="truncate font-medium text-neutral-900" aria-current="page">{title}</li>
          </>
        )}
      </ol>
    </nav>
  );
}

function RoomContent({ room }: { room: Listing }) {
  return (
    <>
      <PhotoGallery photos={room.photos} />

      <div className="px-4 sm:px-0 lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
        <div>
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
            <BookingCard listing={room} />
          </div>
        </aside>
      </div>
    </>
  );
}

export function RoomSkeleton() {
  return (
    <div>
      <div className="aspect-[4/3] w-full animate-pulse bg-neutral-200 sm:aspect-[16/9] sm:rounded-2xl" />
      <LoadingIndicator label="Cargando alojamiento…" />
      <div className="animate-pulse space-y-3 px-4 sm:px-0" aria-hidden="true">
        <div className="h-7 w-2/3 rounded bg-neutral-200" />
        <div className="h-4 w-1/2 rounded bg-neutral-200" />
        <div className="h-4 w-1/3 rounded bg-neutral-200" />
      </div>
    </div>
  );
}
