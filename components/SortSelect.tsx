import type { SortOrder } from "@/types/listing";

interface SortSelectProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

const SortSelect = ({ value, onChange }: SortSelectProps) => (
  <label className="flex items-center gap-2 text-sm">
    <span className="text-neutral-500">Ordenar por precio</span>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value as SortOrder)}
      className="cursor-pointer rounded-full border border-neutral-300 bg-white px-4 py-2 font-semibold outline-none hover:border-neutral-900 focus-visible:border-neutral-900"
    >
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>
  </label>
);

export default SortSelect;
