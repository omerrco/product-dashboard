import ErrorMessage from "../../ui/ErrorMessage";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ProductsActions from "./ProductsActions";
import ProductStatusBadge from "./ProductStatusBadge";
import useProducts from "./useProducts";

export default function ProductsTable() {
  const { products, count, isPending, isError, error, refetch } = useProducts();

  if (isPending) {
    return <Spinner label="Loading products..." />;
  }

  if (isError && error) {
    return (
      <ErrorMessage
        title="Products could not be loaded"
        message={error.message}
        onRetry={() => refetch}
      />
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-orange-100 bg-white/80 p-8 text-center shadow-sm">
        <p className="text-sm font-medium text-slate-700">No products found.</p>

        <p className="mt-1 text-sm text-slate-500">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Table columns="1.5fr 1fr 120px 100px 100px 100px">
        <Table.Header>
          <div className="justify-self-start">Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Stock</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <div className="justify-self-start font-medium text-slate-900">
                {product.name}
              </div>
              <div>{product.categories?.name ?? "No category"}</div>
              <div>${Number(product.price).toFixed(2)}</div>
              <div>{product.stock}</div>
              <div>
                <ProductStatusBadge status={product.status} />
              </div>
              <div>
                <ProductsActions product={product} />
              </div>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </div>
  );
}
