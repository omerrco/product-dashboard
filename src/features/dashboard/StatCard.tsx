type StatCardProps = {
  label: string;
  value: string | number;
  description: string;
};

export default function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="border-brand-100 rounded-2xl border bg-white/80 p-5 shadow-sm backdrop-blur-xl">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <h2 className="mt-3 text-3xl font-bold text-slate-900">{value}</h2>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}
