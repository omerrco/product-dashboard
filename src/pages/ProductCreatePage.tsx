import { LuArrowLeft } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import ProductForm, { type ProductFormValues } from "../ui/ProductForm";
import { useCreateProduct } from "../features/products/useCreateProduct";

export default function ProductCreatePage() {
  const navigate = useNavigate();
  const { createProductMutation, isCreating } = useCreateProduct();

  const handleSubmit = (values: ProductFormValues) => {
    createProductMutation(
      {
        ...values,
        description: values.description || null,
      },
      {
        onSuccess: () => {
          navigate("/products");
        },
      },
    );
  };
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
        isSubmitting={isCreating}
        submitLabel="Create product"
      />
    </section>
  );
}
