import type { Product } from "../../types/productType";

type ProductStockBadgeProps = {
  stock: Product["stock"];
};

export default function ProductStockBadge({ stock }: ProductStockBadgeProps) {
  const isOutOfStock = stock === 0;
  const isLowStock = stock > 0 && stock <= 5;

  const styles = isOutOfStock
    ? "text-red-500"
    : isLowStock
      ? "text-amber-500"
      : "text-emerald-500";

  return <span className={styles}>{stock}</span>;
}
