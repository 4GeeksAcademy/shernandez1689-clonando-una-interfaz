import Link from "next/link";
import { HouseIcon } from "./icons";

const BrandLogo = () => (
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
);

export default BrandLogo;
