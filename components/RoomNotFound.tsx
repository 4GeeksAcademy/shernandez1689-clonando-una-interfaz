import Link from "next/link";

const RoomNotFound = () => (
  <div className="px-4 py-20 text-center">
    <p className="text-lg font-semibold">No encontramos este alojamiento</p>
    <Link href="/catalog" className="mt-4 inline-block font-semibold underline underline-offset-4">
      Volver al catálogo
    </Link>
  </div>
);

export default RoomNotFound;
