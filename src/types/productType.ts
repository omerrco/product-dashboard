export type ProductStatus = "active" | "draft" | "archived";

export type Product = {
  id: string;
  name: string;
  description: string | null;
  category_id: string | null;
  price: number;
  stock: number;
  image_url: string | null;
  status: ProductStatus;
  created_at: string;
  categories: {
    id: string;
    name: string;
  } | null;
};
