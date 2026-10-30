import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { Listing } from "@/types/listing";
import FavoriteButton from "./FavoriteButton";
import ListingPhoto from "./ListingPhoto";
import StarRating from "./StarRating";

const ListingCard = ({ listing }: { listing: Listing }) => (
  <article className="group relative">
    <Link href={`/rooms/${listing.id}`} className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4">
      <ListingPhoto
        photo={listing.photos[0]}
        alt={listing.title}
        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-square w-full rounded-xl transition group-hover:brightness-95"
      />
      <div className="mt-3 flex items-start justify-between gap-2 text-[15px]">
        <h3 className="truncate font-semibold">{listing.title}</h3>
        <StarRating rating={listing.rating} className="shrink-0" />
      </div>
      <p className="truncate text-[15px] text-neutral-500">{listing.location}</p>
      <p className="mt-1 text-[15px]">
        <span className="font-semibold">{formatPrice(listing.pricePerNight)}</span> noche
      </p>
    </Link>
    <FavoriteButton className="absolute right-3 top-3" />
  </article>
);

export default ListingCard;
