export default function LoadingIndicator({ label }: { label: string }) {
  return (
    <div role="status" aria-live="polite" className="flex items-center justify-center gap-3 py-6 text-sm font-medium text-neutral-500">
      <span className="size-5 animate-spin rounded-full border-2 border-neutral-300 border-t-rose-500" />
      {label}
    </div>
  );
}

/** Tarjeta gris con animación de pulso mientras llegan los datos. */
export function ListingCardSkeleton() {
  return (
    <div className="animate-pulse" aria-hidden="true">
      <div className="aspect-square w-full rounded-xl bg-neutral-200" />
      <div className="mt-3 h-4 w-3/4 rounded bg-neutral-200" />
      <div className="mt-2 h-4 w-1/2 rounded bg-neutral-200" />
      <div className="mt-2 h-4 w-1/3 rounded bg-neutral-200" />
    </div>
  );
}
