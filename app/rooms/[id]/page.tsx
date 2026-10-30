import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import RoomDetail from "@/components/RoomDetail";
import RoomSkeleton from "@/components/RoomSkeleton";
import { LISTINGS } from "@/data/listings";

export const generateStaticParams = () =>
  LISTINGS.map((listing) => ({ id: listing.id }));

const RoomPage = () => (
  <>
    <Navbar />
    {/* Los ids que no están en generateStaticParams se resuelven al pedir la página. */}
    <Suspense fallback={<RoomSkeleton />}>
      <RoomDetail />
    </Suspense>
  </>
);

export default RoomPage;
