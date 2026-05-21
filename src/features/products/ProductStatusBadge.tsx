import type { ProductStatus } from "../../types/productType";

type ProductStatusBadgeProps = {
  status: ProductStatus;
};

const styles = {
  active: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",

  draft: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",

  archived: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
};

export default function ProductStatusBadge({
  status,
}: ProductStatusBadgeProps) {
  return (
    <span
      className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}
