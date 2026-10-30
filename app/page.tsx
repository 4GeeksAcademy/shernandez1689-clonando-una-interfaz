"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CategoryBar from "@/components/CategoryBar";
import ListingCard from "@/components/ListingCard";
import LoadingIndicator, { ListingCardSkeleton } from "@/components/LoadingIndicator";
import Navbar from "@/components/Navbar";
import { CATEGORIES, LISTINGS } from "@/data/listings";
import { normalize } from "@/lib/format";
import type { CategoryId, Listing } from "@/types/listing";

export default function HomePage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("todos");

  // Simula la petición de datos al montar la página.
  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(LISTINGS);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Se recalcula en cada pulsación porque `query` cambia en cada onChange.
  const term = normalize(query.trim());
  const visibleListings = listings.filter(
    (listing) =>
      (activeCategory === "todos" || listing.category === activeCategory) &&
      normalize(`${listing.title} ${listing.location}`).includes(term),
  );

  return (
    <>
      <Navbar search={{ value: query, onChange: setQuery }}>
        <CategoryBar
          categories={CATEGORIES}
          activeId={activeCategory}
          onChange={setActiveCategory}
        />
      </Navbar>

      <main className="mx-auto w-full max-w-screen-2xl flex-1 px-4 pb-16 pt-6 sm:px-6 lg:px-10">
        {loading ? (
          <>
            <LoadingIndicator label="Cargando alojamientos…" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }, (_, i) => (
                <ListingCardSkeleton key={i} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <p className="text-sm text-neutral-500" aria-live="polite">
                {visibleListings.length} de {listings.length} alojamientos
              </p>
              <Link href="/catalog" className="text-sm font-semibold underline underline-offset-4">
                Ver catálogo completo
              </Link>
            </div>

            {visibleListings.length > 0 ? (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-lg font-semibold">No hay coincidencias</p>
                <p className="mt-1 text-neutral-500">
                  Prueba con otra búsqueda o cambia de categoría.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("todos");
                  }}
                  className="mt-6 rounded-lg border border-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-100"
                >
                  Quitar filtros
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}
