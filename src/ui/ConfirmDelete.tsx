import type { Product } from "../types/productType";
import Button from "./Button";
import Modal from "./Modal";

type ConfirmDeleteProps = {
  product: Product;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting?: boolean;
};

export default function ConfirmDelete({
  product,
  onClose,
  isDeleting = false,
  onConfirm,
}: ConfirmDeleteProps) {
  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-semibold text-slate-900">Delete product?</h2>

      <p className="mt-2 text-sm text-slate-600">
        Are you sure you want to delete{" "}
        <span className="font-medium text-slate-900">{product.name}</span>? This
        action cannot be undone.
      </p>

      <div className="mt-6 flex justify-end gap-3">
        <Button disabled={isDeleting} variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={isDeleting} onClick={onConfirm} variant="danger">
          Delete
        </Button>
      </div>
    </Modal>
  );
}
