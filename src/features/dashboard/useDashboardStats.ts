import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "../../services/apiProducts";

export default function useDashboardStats() {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: getDashboardStats,
  });

  return {
    stats: data,
    isPending,
    isError,
    error,
    refetch,
  };
}
