import ProductsTable from "../features/products/ProductsTable";
import ProductsTableOperations from "../features/products/ProductsTableOperations";

export default function ProductsPage() {
  return (
    <div className="grid gap-4">
      <ProductsTableOperations />

      <ProductsTable />
    </div>
  );
}
