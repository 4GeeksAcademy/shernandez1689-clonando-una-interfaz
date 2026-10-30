import Link from "next/link";
import type { ReactNode } from "react";
import { GlobeIcon, HouseIcon, MenuIcon, SearchIcon, UserIcon, XIcon } from "./icons";

interface NavbarProps {
  /** Si se pasa, la barra muestra un campo de búsqueda controlado por la página. */
  search?: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  };
  /** Contenido extra que queda fijo bajo la barra (p. ej. las categorías). */
  children?: ReactNode;
}

export default function Navbar({ search, children }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex h-20 max-w-screen-2xl items-center gap-3 px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1 text-rose-500"
          aria-label="Ir al inicio"
        >
          <HouseIcon className="size-8" strokeWidth={2.4} />
          <span className="hidden text-2xl font-bold tracking-tight md:inline">
            clonbnb
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 justify-center">
          {search ? (
            <SearchField {...search} />
          ) : (
            <Link
              href="/catalog"
              className="flex w-full max-w-md items-center gap-3 rounded-full border border-neutral-200 py-2 pl-5 pr-2 text-sm font-medium shadow-sm transition hover:shadow-md"
            >
              <span className="flex-1 truncate">Buscar alojamientos</span>
              <span className="grid size-9 place-items-center rounded-full bg-rose-500 text-white">
                <SearchIcon className="size-4" strokeWidth={3} />
              </span>
            </Link>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            className="hidden rounded-full px-4 py-3 text-sm font-semibold hover:bg-neutral-100 lg:block"
          >
            Hazte anfitrión
          </button>
          <button
            type="button"
            aria-label="Idioma y moneda"
            className="hidden rounded-full p-3 hover:bg-neutral-100 sm:block"
          >
            <GlobeIcon className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Menú de usuario"
            className="flex items-center gap-2 rounded-full border border-neutral-200 p-1 transition hover:shadow-md sm:py-1.5 sm:pl-3 sm:pr-1.5"
          >
            <MenuIcon className="hidden size-4 sm:block" />
            <UserIcon className="size-8 text-neutral-500" />
          </button>
        </div>
      </nav>
      {children}
    </header>
  );
}

function SearchField({ value, onChange, placeholder }: NonNullable<NavbarProps["search"]>) {
  return (
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
}
