import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface HttpResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
}

interface HttpError {
  status: number;
  statusText: string;
  message: string;
}

export class HttpSerivce {
  private baseUrl: string | undefined;

  private axiosInstance: AxiosInstance;

  constructor(baseUrl = 'http://localhost:4200') {
    this.baseUrl = baseUrl;
    this.axiosInstance = axios.create({
      withCredentials: true,
      timeout: 5000
    });
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/api/${url}`;
  }

  private handleResponse<T>(response: AxiosResponse<T>): HttpResponse<T> {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    };
  }

  private handleError(error: AxiosError): Promise<HttpError> {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      status: error.response?.status || 500,
      statusText: error.response?.statusText || 'Internal Server Error',
      message: error.message
    });
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    const fullUrl = this.getFullApiUrl(url);
    const response = await this.axiosInstance.get<T>(fullUrl, config);
    return this.handleResponse<T>(response);
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<HttpResponse<T>> {
    const fullUrl = this.getFullApiUrl(url);
    const response = await this.axiosInstance.post<T>(fullUrl, data, config);

    return this.handleResponse<T>(response);
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<HttpResponse<T>> {
    const fullUrl = this.getFullApiUrl(url);
    const response = await this.axiosInstance.put<T>(fullUrl, data, config);

    return this.handleResponse<T>(response);
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    const fullUrl = this.getFullApiUrl(url);
    const response = await this.axiosInstance.delete<T>(fullUrl, config);

    return this.handleResponse<T>(response);
  }
}
