import type { Category, CategoryId } from "@/types/listing";

interface CategoryBarProps {
  categories: Category[];
  activeId: CategoryId;
  onChange: (id: CategoryId) => void;
}

export default function CategoryBar({ categories, activeId, onChange }: CategoryBarProps) {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10">
      <ul className="no-scrollbar -mb-px flex gap-8 overflow-x-auto pt-2">
        {categories.map((category) => {
          const active = category.id === activeId;
          return (
            <li key={category.id} className="shrink-0">
              <button
                type="button"
                onClick={() => onChange(category.id)}
                aria-pressed={active}
                className={`flex flex-col items-center gap-1.5 border-b-2 pb-3 text-xs font-semibold transition ${
                  active
                    ? "border-neutral-900 text-neutral-900"
                    : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-900"
                }`}
              >
                <span
                  className={`text-2xl transition ${active ? "" : "opacity-70 grayscale"}`}
                  aria-hidden="true"
                >
                  {category.icon}
                </span>
                {category.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
