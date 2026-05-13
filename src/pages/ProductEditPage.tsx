import { Link, useNavigate } from "react-router-dom";
import useProduct from "../features/products/useProduct";
import ErrorMessage from "../ui/ErrorMessage";
import Spinner from "../ui/Spinner";
import { LuArrowLeft } from "react-icons/lu";

import ProductForm, { type ProductFormValues } from "../ui/ProductForm";
import { useUpdateProduct } from "../features/products/useUpdateProduct";

export default function ProductEditPage() {
  const { product, isPending, isError, error, refetch } = useProduct();
  const { updateProductMutation, isUpdating } = useUpdateProduct();
  const navigate = useNavigate();

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

  const handleSubmit = (values: ProductFormValues) => {
    updateProductMutation(
      {
        productId: product.id,
        values: {
          name: values.name,
          description: values.description || null,
          category_id: values.category_id,
          price: values.price,
          stock: values.stock,
          status: values.status,
        },
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

      <ProductForm
        product={product}
        onSubmit={handleSubmit}
        isSubmitting={isUpdating}
      />
    </section>
  );
}
