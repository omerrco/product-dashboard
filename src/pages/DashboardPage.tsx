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

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="border-brand-100 rounded-2xl border bg-white/80 p-5 shadow-sm backdrop-blur-xl">
          <p className="text-sm font-medium text-slate-500">Total Products</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {stats.totalProducts}
          </h2>
          <p className="mt-2 text-sm text-slate-500">Products in inventory</p>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur-xl">
          <p className="text-sm font-medium text-slate-500">Active Products</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {stats.activeProducts}
          </h2>
          <p className="mt-2 text-sm text-slate-500">Currently available</p>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur-xl">
          <p className="text-sm font-medium text-slate-500">Low Stock</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {stats.lowStockProducts.length}
          </h2>
          <p className="mt-2 text-sm text-slate-500">Products running low</p>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur-xl">
          <p className="text-sm font-medium text-slate-500">Inventory Value</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">{`$${stats.inventoryValue.toLocaleString()}`}</h2>
          <p className="mt-2 text-sm text-slate-500">Total inventory worth</p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-orange-100 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Recent Products
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Recently updated inventory items.
            </p>
          </div>
          <div className="mt-6">
            {stats.recentProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-4 py-3"
              >
                <div>
                  <p className="font-medium text-slate-900">{product.name}</p>

                  <p className="text-sm text-slate-500">
                    {product.categories?.name ?? "No category"}
                  </p>
                </div>

                <p className="text-sm font-semibold text-slate-900">
                  ${Number(product.price).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Low Stock</h2>
            <p className="mt-1 text-sm text-slate-500">
              Products that need attention.
            </p>
          </div>
          <div className="mt-6">
            {stats.lowStockProducts.length === 0 ? (
              <p className="py-3 text-sm text-slate-500">
                No low stock products.
              </p>
            ) : (
              stats.lowStockProducts.slice(0, 5).map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-4 py-3"
                >
                  <div>
                    <p className="font-medium text-slate-900">{product.name}</p>

                    <p className="text-sm text-slate-500">
                      {product.categories?.name ?? "No category"}
                    </p>
                  </div>

                  <span className="text-brand-700 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold">
                    {product.stock} left
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
