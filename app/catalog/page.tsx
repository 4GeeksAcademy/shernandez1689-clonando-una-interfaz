"use client";

import { useState } from "react";
import ListingCard from "@/components/ListingCard";
import MapPlaceholder from "@/components/MapPlaceholder";
import Navbar from "@/components/Navbar";
import SortSelect from "@/components/SortSelect";
import { LISTINGS } from "@/data/listings";
import { normalize } from "@/lib/format";
import type { SortOrder } from "@/types/listing";

export default function CatalogPage() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [query, setQuery] = useState("");

  const term = normalize(query.trim());
  const results = LISTINGS.filter((listing) =>
    normalize(`${listing.title} ${listing.location}`).includes(term),
  ).sort((a, b) =>
    sortOrder === "asc"
      ? a.pricePerNight - b.pricePerNight
      : b.pricePerNight - a.pricePerNight,
  );

  return (
    <>
      <Navbar search={{ value: query, onChange: setQuery }} />

      <main className="mx-auto w-full max-w-screen-2xl flex-1 px-4 pb-16 pt-6 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1fr)_40%] lg:gap-8 lg:px-10">
        <section aria-labelledby="results-title">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h1 id="results-title" className="text-lg font-semibold" aria-live="polite">
              {results.length} {results.length === 1 ? "alojamiento" : "alojamientos"}
            </h1>
            <SortSelect value={sortOrder} onChange={setSortOrder} />
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 2xl:grid-cols-3">
              {results.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-neutral-500">
              No hay alojamientos que coincidan con «{query}».
            </p>
          )}
        </section>

        <aside aria-label="Mapa de resultados" className="mt-10 lg:mt-0">
          <MapPlaceholder className="h-80 lg:sticky lg:top-24 lg:h-[calc(100dvh-8rem)]" />
        </aside>
      </main>
    </>
  );
}
