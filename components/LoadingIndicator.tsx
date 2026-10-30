const LoadingIndicator = ({ label }: { label: string }) => (
  <div role="status" aria-live="polite" className="flex items-center justify-center gap-3 py-6 text-sm font-medium text-neutral-500">
    <span className="size-5 animate-spin rounded-full border-2 border-neutral-300 border-t-rose-500" />
    {label}
  </div>
);

export default LoadingIndicator;
