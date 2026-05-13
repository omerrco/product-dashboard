import { LuChevronDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import Button from "./Button";
import type { Product } from "../types/productType";
import useCategories from "../features/products/useCategories";
import { useForm } from "react-hook-form";
import type { ReactNode } from "react";

type ProductFormValues = {
  name: string;
  description: string;
  category_id: string;
  price: number;
  stock: number;
  status: "active" | "draft" | "archived";
};

type ProductFormProps = {
  product: Product;
  isSubmitting?: boolean;
  onSubmit: () => void;
};

export default function ProductForm({
  product,
  isSubmitting = false,
  onSubmit,
}: ProductFormProps) {
  const { categories, isPending } = useCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>({
    defaultValues: {
      name: product.name,
      description: product.description ?? "",
      category_id: product.category_id ?? "",
      price: product.price,
      stock: product.stock,
      status: product.status,
    },
  });

  const submitForm = () => {
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-brand-100 rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur-xl"
    >
      <div className="grid gap-x-5 gap-y-4 lg:grid-cols-2">
        <FormField label="Name" error={errors.name?.message}>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            placeholder="Product name"
          />
        </FormField>

        <FormField label="Category" error={errors.category_id?.message}>
          <div className="relative">
            <select
              {...register("category_id", {
                required: "Please select a category",
              })}
              disabled={isPending}
              className="appearance-none pr-10"
            >
              <option value="">Select category</option>

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate-500">
              <LuChevronDown />
            </span>
          </div>
        </FormField>

        <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:col-span-2">
          <FormField label="Price" error={errors.price?.message}>
            <input
              {...register("price", {
                valueAsNumber: true,
                required: "Price is required",
                min: {
                  value: 0.01,
                  message: "Price must be greater than 0",
                },
              })}
              onKeyDown={(e) => {
                if (["e", "E", "+", "-"].includes(e.key)) {
                  e.preventDefault();
                }
              }}
              type="number"
              min="0"
              step="0.01"
            />
          </FormField>

          <FormField label="Stock" error={errors.stock?.message}>
            <input
              {...register("stock", {
                valueAsNumber: true,
                required: "Stock is required",
                min: {
                  value: 0,
                  message: "Stock cannot be negative",
                },
                validate: (value) =>
                  Number.isInteger(value) || "Stock must be a whole number",
              })}
              onKeyDown={(e) => {
                if (["e", "E", "+", "-"].includes(e.key)) {
                  e.preventDefault();
                }
              }}
              type="number"
              min="0"
            />
          </FormField>
        </div>

        <div className="lg:col-span-2">
          <FormField label="Description" error={errors.description?.message}>
            <textarea
              {...register("description", {
                maxLength: {
                  value: 500,
                  message: "Description cannot exceed 500 characters",
                },
              })}
              placeholder="Product description"
              rows={4}
            />
          </FormField>
        </div>

        <div className="sm:w-fit">
          <FormField label="Status" error={errors.status?.message}>
            <div className="relative">
              <select
                {...register("status", {
                  required: "Status is required",
                })}
                className="appearance-none pr-10"
              >
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
              <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate-500">
                <LuChevronDown />
              </span>
            </div>
          </FormField>
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
  );
}

type FormFieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className="grid gap-2">
      <label className="flex items-center text-sm font-medium text-slate-700">
        {label}

        {error && <span className="ml-2 text-xs text-red-500">{error}</span>}
      </label>

      {children}
    </div>
  );
}
