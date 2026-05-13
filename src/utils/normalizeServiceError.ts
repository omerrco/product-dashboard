import { ServiceError } from "../ui/ServiceError";

export function normalizeServiceError(error: unknown): never {
  if (error instanceof ServiceError) {
    throw error;
  }

  if (error instanceof TypeError) {
    throw new ServiceError(
      "Unable to connect to the server. Please try again.",
      "NETWORK",
      error,
    );
  }

  if (error instanceof Error) {
    throw new ServiceError(
      error.message || "Something went wrong. Please try again.",
      "DATABASE",
      error,
    );
  }

  throw new ServiceError(
    "Something went wrong. Please try again.",
    "UNKNOWN",
    error,
  );
}
