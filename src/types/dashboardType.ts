import type { Product } from "./productType";

export type DashboardStats = {
  totalProducts: number;
  activeProducts: number;
  lowStockProducts: Product[];
  inventoryValue: number;
  recentProducts: Product[];
};
