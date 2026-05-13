import { LuPencil, LuTrash2 } from "react-icons/lu";
import { useState } from "react";
import type { Product } from "../../types/productType";
import useDeleteProduct from "./useDeleteProduct";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { Link } from "react-router-dom";

type ProductsActionsProps = {
  product: Product;
};

export default function ProductsActions({ product }: ProductsActionsProps) {
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const { deleteProductMutation, isDeleting } = useDeleteProduct();

  const onModalClose = () => {
    setProductToDelete(null);
  };

  const handleDeleteProduct = () => {
    if (!productToDelete) return;

    deleteProductMutation(productToDelete.id, {
      onSuccess: () => setProductToDelete(null),
    });
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        to={`/products/${product.id}/edit`}
        className="text-lg transition hover:text-red-500"
      >
        <LuPencil />
      </Link>

      <button
        onClick={() => setProductToDelete(product)}
        className="text-center text-lg transition hover:text-red-500"
      >
        <LuTrash2 />
      </button>

      {productToDelete && (
        <ConfirmDelete
          product={productToDelete}
          onClose={onModalClose}
          onConfirm={handleDeleteProduct}
          isDeleting={isDeleting}
        />
      )}
    </div>
  );
}
