import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import ProductForm, { type ProductFormValues } from "../ui/ProductForm";

export default function ProductCreatePage() {
  const handleSubmit = (values: ProductFormValues) => {};
  return (
    <section className="grid gap-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-brand-600 text-sm font-medium">Create product</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Add New Product
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

      <ProductForm
        onSubmit={handleSubmit}
        isSubmitting={false}
        submitLabel="Create product"
      />
    </section>
  );
}
