"use client";

import { useState } from "react";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/ListingCard";
import ListingGrid from "@/components/ListingGrid";
import MapPlaceholder from "@/components/MapPlaceholder";
import Navbar from "@/components/Navbar";
import SortSelect from "@/components/SortSelect";
import { LISTINGS } from "@/data/listings";
import { normalize, plural } from "@/lib/format";
import type { SortOrder } from "@/types/listing";

const CatalogPage = () => {
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
              {plural(results.length, "alojamiento", "alojamientos")}
            </h1>
            <SortSelect value={sortOrder} onChange={setSortOrder} />
          </div>

          {results.length > 0 ? (
            <ListingGrid className="2xl:grid-cols-3">
              {results.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
            </ListingGrid>
          ) : (
            <EmptyState
              title="No hay coincidencias"
              description={`Ningún alojamiento coincide con «${query}».`}
              actionLabel="Borrar búsqueda"
              onAction={() => setQuery("")}
            />
          )}
        </section>

        <aside aria-label="Mapa de resultados" className="mt-10 lg:mt-0">
          <MapPlaceholder className="h-80 lg:sticky lg:top-24 lg:h-[calc(100dvh-8rem)]" />
        </aside>
      </main>
    </>
  );
};

export default CatalogPage;
