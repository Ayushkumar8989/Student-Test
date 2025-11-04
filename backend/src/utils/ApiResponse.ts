export class ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;

  constructor(success: boolean, message: string, data?: unknown) {
    this.success = success;
    this.message = message;
    this.data = data;
  }

  static success(message: string, data?: unknown) {
    return new ApiResponse(true, message, data);
  }

  static error(message: string) {
    return new ApiResponse(false, message);
  }
}
