import type { DashboardStats } from "../../types/dashboardType";

type RecentProductsProps = {
  products: DashboardStats["recentProducts"];
};

export default function RecentProducts({ products }: RecentProductsProps) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur-xl">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Recent Products
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Recently updated inventory items.
        </p>
      </div>
      <div className="mt-6">
        {products.map((product) => (
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
  );
}
