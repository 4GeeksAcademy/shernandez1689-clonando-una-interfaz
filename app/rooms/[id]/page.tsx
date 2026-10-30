import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import RoomDetail, { RoomSkeleton } from "@/components/RoomDetail";
import { LISTINGS } from "@/data/listings";

export function generateStaticParams() {
  return LISTINGS.map((listing) => ({ id: listing.id }));
}

export default function RoomPage() {
  return (
    <>
      <Navbar />
      {/* Los ids que no están en generateStaticParams se resuelven al pedir la página. */}
      <Suspense fallback={<RoomSkeleton />}>
        <RoomDetail />
      </Suspense>
    </>
  );
}
