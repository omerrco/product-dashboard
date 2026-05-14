import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "../../services/apiProducts";

export default function useDashboardStats() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardStats,
  });

  return {
    stats: data,
    isPending,
    isError,
    error,
  };
}
