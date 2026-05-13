export type ServiceErrorType = "NETWORK" | "DATABASE" | "UNKNOWN";

export class ServiceError extends Error {
  type: ServiceErrorType;

  constructor(message: string, type: ServiceErrorType, cause?: unknown) {
    super(message, { cause });
    this.name = "ServiceError";
    this.type = type;
  }
}
