import Link from "next/link";
import { ArrowLeftIcon, ChevronRightIcon } from "./icons";

const Breadcrumbs = ({ title }: { title?: string }) => (
  <nav aria-label="Ruta de navegación" className="flex items-center gap-3 px-4 py-4 sm:px-0 sm:pt-0">
    <Link
      href="/catalog"
      aria-label="Volver al catálogo"
      className="grid size-9 shrink-0 place-items-center rounded-full hover:bg-neutral-100"
    >
      <ArrowLeftIcon className="size-5" />
    </Link>
    <ol className="flex min-w-0 items-center gap-1.5 text-sm text-neutral-500">
      <li>
        <Link href="/" className="hover:text-neutral-900 hover:underline">Inicio</Link>
      </li>
      <ChevronRightIcon className="size-3.5 shrink-0" />
      <li>
        <Link href="/catalog" className="hover:text-neutral-900 hover:underline">Catálogo</Link>
      </li>
      {title && (
        <>
          <ChevronRightIcon className="size-3.5 shrink-0" />
          <li className="truncate font-medium text-neutral-900" aria-current="page">{title}</li>
        </>
      )}
    </ol>
  </nav>
);

export default Breadcrumbs;
