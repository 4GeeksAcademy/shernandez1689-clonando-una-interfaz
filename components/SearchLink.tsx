import Link from "next/link";
import { SearchIcon } from "./icons";

/** Versión de la búsqueda para páginas sin filtro propio: lleva al catálogo. */
const SearchLink = () => (
  <Link
    href="/catalog"
    className="flex w-full max-w-md items-center gap-3 rounded-full border border-neutral-200 py-2 pl-5 pr-2 text-sm font-medium shadow-sm transition hover:shadow-md"
  >
    <span className="flex-1 truncate">Buscar alojamientos</span>
    <span className="grid size-9 place-items-center rounded-full bg-rose-500 text-white">
      <SearchIcon className="size-4" strokeWidth={3} />
    </span>
  </Link>
);

export default SearchLink;
