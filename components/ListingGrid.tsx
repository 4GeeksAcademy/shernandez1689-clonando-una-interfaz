import type { ReactNode } from "react";

interface ListingGridProps {
  children: ReactNode;
  /** Columnas extra para pantallas grandes, p. ej. "lg:grid-cols-3". */
  className?: string;
}

/** Una columna en móvil y dos desde `sm`; cada página añade más con `className`. */
const ListingGrid = ({ children, className = "" }: ListingGridProps) => (
  <div className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 ${className}`}>
    {children}
  </div>
);

export default ListingGrid;
