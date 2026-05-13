import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../../services/apiProducts";

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateProduct,

    onSuccess: (updatedProduct) => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      queryClient.invalidateQueries({
        queryKey: ["product", updatedProduct.id],
      });
    },
  });

  return {
    updateProductMutation: mutate,
    isUpdating: isPending,
  };
}
