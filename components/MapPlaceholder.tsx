import { MapPinIcon } from "./icons";

const MapPlaceholder = ({ className = "" }: { className?: string }) => (
  <div
    className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-neutral-200 bg-[radial-gradient(circle,#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] text-neutral-500 ${className}`}
  >
    <MapPinIcon className="size-10" strokeWidth={1.5} />
    <span className="text-lg font-semibold">Mapa</span>
  </div>
);

export default MapPlaceholder;
