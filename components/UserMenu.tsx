import { GlobeIcon, MenuIcon, UserIcon } from "./icons";

const UserMenu = () => (
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
);

export default UserMenu;
