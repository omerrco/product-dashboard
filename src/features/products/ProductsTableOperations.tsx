import { LuChevronDown, LuSearch } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";
import { setParam } from "../../utils/helpers";
import useCategories from "./useCategories";

export default function ProductsTableOperations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories, isPending } = useCategories();

  const currentSearch = searchParams.get("search") || "";
  const currentCategory = searchParams.get("category") || "";
  const currentSortBy = searchParams.get("sortBy") || "created_at-desc";

  function handleChange(key: string, value: string) {
    const nextParams = setParam(searchParams, key, value);

    nextParams.set("page", "1");
    setSearchParams(nextParams);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-500">
          <LuSearch />
        </span>
        <input
          value={currentSearch}
          className="pl-10"
          type="text"
          placeholder="Search products..."
          onChange={(e) => handleChange("search", e.target.value)}
        />
      </div>

      <div className="relative">
        <select
          value={currentCategory}
          disabled={isPending}
          className="appearance-none pr-10"
          onChange={(e) => handleChange("category", e.target.value)}
        >
          <option value="">All categories</option>

          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate-500">
          <LuChevronDown />
        </span>
      </div>

      <div className="relative ml-auto">
        <select
          value={currentSortBy}
          disabled={isPending}
          className="appearance-none pr-10"
          onChange={(e) => handleChange("sortBy", e.target.value)}
        >
          <option value="created_at-desc">Newest</option>
          <option value="created_at-asc">Oldest</option>

          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>

          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>

          <option value="stock-asc">Stock (Low to High)</option>
          <option value="stock-desc">Stock (High to Low)</option>
        </select>

        <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate-500">
          <LuChevronDown />
        </span>
      </div>
    </div>
  );
}
