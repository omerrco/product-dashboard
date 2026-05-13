type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  label?: string;
};

export default function Spinner({
  size = "md",
  label = "Loading...",
}: SpinnerProps) {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2.5 py-10">
      <div
        className={`animate-spin rounded-full border-slate-300 border-t-slate-900 ${sizes[size]}`}
        role="status"
        aria-label={label}
      />
      <span className="text-sm text-slate-500">{label}</span>
    </div>
  );
}
