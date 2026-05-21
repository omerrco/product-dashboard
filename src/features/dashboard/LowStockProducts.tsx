import type { DashboardStats } from "../../types/dashboardType";

type LowStockProductsProps = {
  products: DashboardStats["lowStockProducts"];
};

export default function LowStockProducts({ products }: LowStockProductsProps) {
  const visibleProducts = products.slice(0, 5);
  return (
    <div className="rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur-xl">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Low Stock</h2>
        <p className="mt-1 text-sm text-slate-500">
          Products that need attention.
        </p>
      </div>
      <div className="mt-6">
        {visibleProducts.length === 0 ? (
          <p className="py-3 text-sm text-red-500">No low stock products.</p>
        ) : (
          <div className="divide-y divide-orange-100">
            {visibleProducts.map((product) => (
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
