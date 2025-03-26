/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ApiRequest {
  method?: string;
  path: string;
  token?: string;
  data?: any;
  dataHeaders?: any;
}

export interface ApiResponseInterface {
  statusCode: number;
  codeDescription: string;
  success: boolean;
  message: string;
  data: any;
}
