import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export default function useProducts() {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const category = searchParams.get("category") || "";
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "created_at-desc";

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["products", page, category, search, sortBy],
    queryFn: () => getProducts({ page, category, search, sortBy }),
  });

  return {
    products: data?.products ?? [],
    count: data?.count ?? 0,
    isPending,
    isError,
    error,
    refetch,
  };
}
