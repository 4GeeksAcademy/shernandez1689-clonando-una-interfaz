"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/format";
import type { Listing } from "@/types/listing";
import GuestCounter from "./GuestCounter";
import StarRating from "./StarRating";

const MIN_GUESTS = 1;

export default function BookingCard({ listing }: { listing: Listing }) {
  const [guests, setGuests] = useState(MIN_GUESTS);
  const [requested, setRequested] = useState(false);

  return (
    <div className="rounded-2xl border border-neutral-200 p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
      <div className="flex items-baseline justify-between gap-2">
        <p>
          <span className="text-2xl font-semibold">{formatPrice(listing.pricePerNight)}</span>{" "}
          noche
        </p>
        <StarRating rating={listing.rating} reviewCount={listing.reviewCount} className="text-sm" />
      </div>

      <div className="mt-6 rounded-xl border border-neutral-300 p-4">
        <GuestCounter
          value={guests}
          min={MIN_GUESTS}
          max={listing.maxGuests}
          onChange={(value) => {
            setGuests(value);
            setRequested(false);
          }}
        />
      </div>

      <button
        type="button"
        onClick={() => setRequested(true)}
        className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#E61E4D] to-[#D70466] py-3.5 font-semibold text-white transition hover:brightness-95 active:scale-[0.99]"
      >
        Reservar
      </button>

      <p className="mt-3 text-center text-sm text-neutral-500" aria-live="polite">
        {requested
          ? `¡Listo! Solicitud simulada para ${guests} ${guests === 1 ? "huésped" : "huéspedes"}.`
          : "Aún no se te cobrará nada"}
      </p>
    </div>
  );
}
