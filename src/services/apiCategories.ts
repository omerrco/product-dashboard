import { normalizeServiceError } from "../utils/normalizeServiceError";
import { supabase } from "./supabase";

export async function getCategories() {
  try {
    const { data: categories, error } = await supabase
      .from("categories")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      throw new Error(
        error.message || "Something went wrong. Please try again",
      );
    }

    return categories ?? [];
  } catch (error) {
    normalizeServiceError(error);
  }
}
