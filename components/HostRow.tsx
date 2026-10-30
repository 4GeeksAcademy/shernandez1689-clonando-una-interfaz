import type { Host } from "@/types/listing";

export default function HostRow({ host }: { host: Host }) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative shrink-0">
        <div
          aria-hidden="true"
          className="grid size-12 place-items-center rounded-full bg-neutral-800 text-lg font-semibold text-white"
        >
          {host.name.charAt(0)}
        </div>
        {host.isSuperhost && (
          <span
            aria-hidden="true"
            className="absolute -bottom-1 -right-1 grid size-5 place-items-center rounded-full bg-rose-500 text-[10px] text-white ring-2 ring-white"
          >
            ★
          </span>
        )}
      </div>
      <div>
        <p className="font-semibold">Anfitrión: {host.name}</p>
        <p className="text-sm text-neutral-500">
          {host.isSuperhost && "Superanfitrión · "}
          {host.yearsHosting} {host.yearsHosting === 1 ? "año" : "años"} como anfitrión
        </p>
      </div>
    </div>
  );
}
