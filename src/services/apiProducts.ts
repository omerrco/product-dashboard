import { ServiceError } from "../ui/ServiceError";
import { PAGE_SIZE } from "../utils/constants";
import { normalizeServiceError } from "../utils/normalizeServiceError";
import { supabase } from "./supabase";

type GetProductsParams = {
  category?: string;
  search?: string;
  page: number;
  sortBy?: string;
};

export async function getProducts({
  category,
  search,
  page,
  sortBy = "created_at-desc",
}: GetProductsParams) {
  try {
    let query = supabase
      .from("products")
      .select(`*, categories!inner (id, name, slug)`, { count: "exact" });

    if (category) {
      query = query.eq("categories.slug", category);
    }

    if (search) {
      query = query.ilike("name", `%${search}%`);
    }

    const [field, direction] = sortBy.split("-");

    if (sortBy) {
      query = query.order(field, {
        ascending: direction === "asc",
      });
    }

    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const { data, error, count } = await query.range(from, to);

    if (error) {
      throw new ServiceError(
        "Products could not be loaded. Please try again.",
        "DATABASE",
        error,
      );
    }

    return {
      products: data ?? [],
      count: count ?? 0,
    };
  } catch (error) {
    normalizeServiceError(error);
  }
}

export async function getProduct(productId: string) {
  try {
    const { data, error } = await supabase
      .from("products")
      .select(`*, categories!inner (id, name, slug)`)
      .eq("id", productId)
      .single();

    if (error) {
      throw new ServiceError(
        "Product could not be loaded. Please try again.",
        "DATABASE",
        error,
      );
    }

    return data;
  } catch (error) {
    normalizeServiceError(error);
  }
}

export async function deleteProduct(productId: string): Promise<void> {
  try {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", productId);

    if (error) {
      throw new ServiceError(
        "Product could not be deleted. Please try again.",
        "DATABASE",
        error,
      );
    }
  } catch (error) {
    normalizeServiceError(error);
  }
}

type UpdateProductPayload = {
  name: string;
  description: string | null;
  category_id: string;
  price: number;
  stock: number;
  status: "active" | "draft" | "archived";
};

type UpdateProductProps = {
  productId: string;
  values: UpdateProductPayload;
};

export async function updateProduct({ productId, values }: UpdateProductProps) {
  try {
    const { data, error } = await supabase
      .from("products")
      .update(values)
      .eq("id", productId)
      .select(`*, categories!inner (id, name, slug)`)
      .single();

    if (error) {
      throw new ServiceError(
        "Product could not be updated. Please try again.",
        "DATABASE",
        error,
      );
    }

    return data;
  } catch (error) {
    normalizeServiceError(error);
  }
}
