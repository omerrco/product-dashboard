import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      toast.success("Product created successfully");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    createProductMutation: mutate,
    isCreating: isPending,
  };
}
