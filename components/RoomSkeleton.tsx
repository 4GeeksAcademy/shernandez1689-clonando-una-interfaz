import LoadingIndicator from "./LoadingIndicator";

const RoomSkeleton = () => (
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

export default RoomSkeleton;
