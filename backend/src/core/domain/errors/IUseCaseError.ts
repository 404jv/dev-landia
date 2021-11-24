export interface IUseCaseError extends Error {
  message: string;
  statusCode: number;
}
