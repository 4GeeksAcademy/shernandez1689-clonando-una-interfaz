import { SearchIcon, XIcon } from "./icons";

export interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchField = ({ value, onChange, placeholder }: SearchFieldProps) => (
  <label className="flex w-full max-w-md items-center gap-2 rounded-full border border-neutral-200 py-2 pl-5 pr-2 shadow-sm transition focus-within:shadow-md hover:shadow-md">
    <span className="sr-only">Buscar alojamientos</span>
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder ?? "Buscar destino o alojamiento"}
      className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-neutral-500 [&::-webkit-search-cancel-button]:hidden"
    />
    {value && (
      <button
        type="button"
        onClick={() => onChange("")}
        aria-label="Borrar búsqueda"
        className="grid size-7 place-items-center rounded-full text-neutral-500 hover:bg-neutral-100"
      >
        <XIcon className="size-4" />
      </button>
    )}
    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-rose-500 text-white">
      <SearchIcon className="size-4" strokeWidth={3} />
    </span>
  </label>
);

export default SearchField;
