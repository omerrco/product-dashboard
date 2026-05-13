import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";

export default function useProduct() {
  const { productId } = useParams();

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId!),
    enabled: Boolean(productId),
  });

  return {
    product: data,
    isPending,
    isError,
    error,
    refetch,
  };
}
