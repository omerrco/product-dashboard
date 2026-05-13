import { Link } from "react-router-dom";
import useProduct from "../features/products/useProduct";
import ErrorMessage from "../ui/ErrorMessage";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";
import { LuArrowLeft, LuChevronDown } from "react-icons/lu";

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

  function updateField(field: string, value: string | number) {}

  return (
    <section className="grid gap-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-brand-600 text-sm font-medium">Edit product</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            {product.name}
          </h1>
        </div>

        <Link
          to="/products"
          className="hover:text-brand-600 flex items-center gap-0.5 text-sm font-medium text-slate-600 transition"
        >
          <span>
            <LuArrowLeft size={14} />
          </span>
          Back
        </Link>
      </div>

      <form className="border-brand-100 rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur-xl">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Name</label>
            <input
              value={formValues.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Product name"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">
              Category
            </label>
            <div className="relative">
              <select
                value={formValues.category_id}
                disabled={isPending}
                className="appearance-none pr-10"
                onChange={(e) => updateField("category_id", e.target.value)}
              >
                <option value="">Select category</option>

                {/* {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))} */}
              </select>
              <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate-500">
                <LuChevronDown />
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">
                Price
              </label>

              <input
                type="number"
                min="0"
                step="0.01"
                value={formValues.price}
                onChange={(e) => updateField("price", Number(e.target.value))}
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">
                Stock
              </label>

              <input
                type="number"
                min="0"
                value={formValues.stock}
                onChange={(e) => updateField("stock", Number(e.target.value))}
              />
            </div>
          </div>

          <div className="grid gap-2 lg:col-span-2">
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

          <div className="grid gap-2 sm:w-fit">
            <label className="text-sm font-medium text-slate-700">Status</label>
            <div className="relative">
              <select
                value={formValues.status}
                className="appearance-none pr-10"
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
              <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate-500">
                <LuChevronDown />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 border-t border-orange-100 pt-5 sm:flex-row sm:justify-end">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-xl border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-orange-50"
          >
            Cancel
          </Link>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save changes"}
          </Button>
        </div>
      </form>
    </section>
  );
}
