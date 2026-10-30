import type { ReactNode } from "react";
import BrandLogo from "./BrandLogo";
import SearchField, { type SearchFieldProps } from "./SearchField";
import SearchLink from "./SearchLink";
import UserMenu from "./UserMenu";

interface NavbarProps {
  /** Si se pasa, la barra muestra un campo de búsqueda controlado por la página. */
  search?: SearchFieldProps;
  /** Contenido extra que queda fijo bajo la barra (p. ej. las categorías). */
  children?: ReactNode;
}

const Navbar = ({ search, children }: NavbarProps) => (
  <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white">
    <nav className="mx-auto flex h-20 max-w-screen-2xl items-center gap-3 px-4 sm:px-6 lg:px-10">
      <BrandLogo />
      <div className="flex min-w-0 flex-1 justify-center">
        {search ? <SearchField {...search} /> : <SearchLink />}
      </div>
      <UserMenu />
    </nav>
    {children}
  </header>
);

export default Navbar;
