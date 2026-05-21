import type { DashboardStats } from "../../types/dashboardType";
import StatCard from "./StatCard";

type DashboardStatsProps = {
  stats: DashboardStats;
};

export default function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        label="Total Products"
        value={stats.totalProducts}
        description="Products in inventory"
      />

      <StatCard
        label="Active Products"
        value={stats.activeProducts}
        description="Currently available"
      />

      <StatCard
        label="Low Stock"
        value={stats.lowStockProducts.length}
        description="Products running low"
      />

      <StatCard
        label="Inventory Value"
        value={`$${stats.inventoryValue.toLocaleString()}`}
        description="Total inventory worth"
      />
    </section>
  );
}
