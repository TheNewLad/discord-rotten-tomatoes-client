export class FetchError extends Error {
  constructor(
    public response: Response,
    public message: string,
  ) {
    super(message);
  }
}
