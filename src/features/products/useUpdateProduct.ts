import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateProduct,

    onSuccess: (updatedProduct) => {
      toast.success("Product updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      queryClient.invalidateQueries({
        queryKey: ["product", updatedProduct.id],
      });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    updateProductMutation: mutate,
    isUpdating: isPending,
  };
}
