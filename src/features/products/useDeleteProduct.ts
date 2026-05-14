import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../services/apiProducts";
import toast from "react-hot-toast";

export default function useDeleteProduct() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      toast.success("Product deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    deleteProductMutation: mutate,
    isDeleting: isPending,
  };
}
