interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

const EmptyState = ({ title, description, actionLabel, onAction }: EmptyStateProps) => (
  <div className="py-20 text-center">
    <p className="text-lg font-semibold">{title}</p>
    <p className="mt-1 text-neutral-500">{description}</p>
    {actionLabel && onAction && (
      <button
        type="button"
        onClick={onAction}
        className="mt-6 rounded-lg border border-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-100"
      >
        {actionLabel}
      </button>
    )}
  </div>
);

export default EmptyState;
