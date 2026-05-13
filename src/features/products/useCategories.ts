import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/apiCategories";

export default function useCategories() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return {
    categories: data ?? [],
    isPending,
    isError,
    error,
  };
}
