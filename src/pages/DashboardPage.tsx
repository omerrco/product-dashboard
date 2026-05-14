export default function DashboardPage() {
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
          <h2 className="mt-3 text-3xl font-bold text-slate-900">24</h2>
          <p className="mt-2 text-sm text-slate-500">Products in inventory</p>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur-xl">
          <p className="text-sm font-medium text-slate-500">Active Products</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">18</h2>
          <p className="mt-2 text-sm text-slate-500">Currently available</p>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur-xl">
          <p className="text-sm font-medium text-slate-500">Low Stock</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">3</h2>
          <p className="mt-2 text-sm text-slate-500">Products running low</p>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur-xl">
          <p className="text-sm font-medium text-slate-500">Inventory Value</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">$12,430</h2>
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
          <div className="mt-6">{/* products */}</div>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Low Stock</h2>
            <p className="mt-1 text-sm text-slate-500">
              Products that need attention.
            </p>
          </div>
          <div className="mt-6">{/* low stock items */}</div>
        </div>
      </section>
    </section>
  );
}
