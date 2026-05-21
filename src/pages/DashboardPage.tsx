import DashboardStats from "../features/dashboard/DashboardStats";
import LowStockProducts from "../features/dashboard/LowStockProducts";
import RecentProducts from "../features/dashboard/RecentProducts";
import useDashboardStats from "../features/dashboard/useDashboardStats";
import ErrorMessage from "../ui/ErrorMessage";
import Spinner from "../ui/Spinner";

export default function DashboardPage() {
  const { stats, isPending, isError, error, refetch } = useDashboardStats();

  if (isPending) return <Spinner label="Loading stats..." />;

  if (isError && error) {
    return (
      <ErrorMessage
        title="Stats could not be loaded"
        message={error.message}
        onRetry={() => refetch()}
      />
    );
  }

  if (!stats) {
    return (
      <ErrorMessage
        title="Stats not found"
        message="The stats on dashboard does not exist."
      />
    );
  }

  return (
    <section className="grid gap-8">
      <div>
        <p className="text-brand-600 text-sm font-medium">Overview</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Monitor your inventory, products, and store performance.
        </p>
      </div>

      <DashboardStats stats={stats} />

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <RecentProducts products={stats.recentProducts} />
        <LowStockProducts products={stats.lowStockProducts} />
      </section>
    </section>
  );
}
