import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
import { setParam } from "../utils/helpers";
import Button from "./Button";

type PaginationProps = {
  count: number;
};

export default function Pagination({ count }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (pageCount <= 1) return null;

  const goToPage = (page: number) => {
    const nextParam = setParam(searchParams, "page", String(page));
    setSearchParams(nextParam);
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <Button
        variant="secondary"
        disabled={currentPage <= 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        Prev
      </Button>

      <p className="text-sm text-slate-500">
        Page <span className="font-medium text-slate-900">{currentPage}</span>{" "}
        of <span className="font-medium text-slate-900">{pageCount}</span>
      </p>

      <Button
        variant="secondary"
        disabled={currentPage >= pageCount}
        onClick={() => goToPage(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
