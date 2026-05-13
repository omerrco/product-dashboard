import { Link } from "react-router-dom";
import useProduct from "../features/products/useProduct";
import ErrorMessage from "../ui/ErrorMessage";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";

export default function ProductEditPage() {
  const { product, isPending, isError, error, refetch } = useProduct();

  if (isPending) return <Spinner label="Loading product..." />;

  if (isError && error) {
    return (
      <ErrorMessage
        title="Product could not be loaded"
        message={error.message}
        onRetry={() => refetch()}
      />
    );
  }

  if (!product) {
    return (
      <ErrorMessage
        title="Product not found"
        message="The product you are looking for does not exist."
      />
    );
  }

  const isSubmitting = false;

  const formValues = {
    name: "test",
    description: "sss",
    category_id: "222",
    price: "333",
    stock: "22",
    status: "active",
    image_url: "ss",
  };

  function updateField(text, value) {}

  return (
    <section className="grid gap-1">
      <div className="flex items-center justify-between">
        <div className="grid gap-0.5">
          <p className="text-brand-600 text-sm font-medium">Edit product</p>
          <h1 className="text-2xl font-bold text-slate-900">{product.name}</h1>
        </div>

        <Link
          to="/products"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          Back to products
        </Link>
      </div>

      <form className="grid grid-cols-2 gap-5 p-6">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-700">Name</label>
          <input
            value={formValues.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Product name"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-700">Category</label>

          <select
            value={formValues.category_id}
            disabled={isPending}
            onChange={(e) => updateField("category_id", e.target.value)}
          >
            <option value="">Select category</option>

            {/* {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))} */}
          </select>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-700">
            Description
          </label>

          <textarea
            value={formValues.description ?? ""}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Product description"
            rows={4}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Price</label>

            <input
              type="number"
              min="0"
              step="0.01"
              value={formValues.price}
              onChange={(e) => updateField("price", Number(e.target.value))}
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Stock</label>

            <input
              type="number"
              min="0"
              value={formValues.stock}
              onChange={(e) => updateField("stock", Number(e.target.value))}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-700">Status</label>

          <select
            value={formValues.status}
            onChange={(e) =>
              updateField(
                "status",

                // e.target.value as ProductFormValues["status"],
                e.target.value,
              )
            }
          >
            <option value="active">Active</option>

            <option value="draft">Draft</option>

            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-700">
            Image URL
          </label>

          <input
            value={formValues.image_url ?? ""}
            onChange={(e) => updateField("image_url", e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="flex justify-end gap-3">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : ""}
          </Button>
        </div>
      </form>
    </section>
  );
}
