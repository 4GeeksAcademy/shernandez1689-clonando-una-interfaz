import { MinusIcon, PlusIcon } from "./icons";

interface GuestCounterProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export default function GuestCounter({ value, min, max, onChange }: GuestCounterProps) {
  const buttonClass =
    "grid size-8 place-items-center rounded-full border border-neutral-400 text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900 disabled:cursor-not-allowed disabled:border-neutral-200 disabled:text-neutral-300";

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold">Huéspedes</p>
        <p className="text-sm text-neutral-500">Máximo {max}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => onChange(value - 1)}
          disabled={value <= min}
          aria-label="Quitar un huésped"
          className={buttonClass}
        >
          <MinusIcon className="size-3.5" strokeWidth={3} />
        </button>
        <span className="w-4 text-center tabular-nums" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          disabled={value >= max}
          aria-label="Añadir un huésped"
          className={buttonClass}
        >
          <PlusIcon className="size-3.5" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
