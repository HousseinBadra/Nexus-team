export interface ResponseSuccess<T> {
  success: true;
  message: T;
}

export interface ResponseError {
  success: false;
  message: string;
}
