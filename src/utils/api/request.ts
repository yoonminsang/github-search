import axios, { AxiosInstance, AxiosResponse } from 'axios';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const client: AxiosInstance = axios.create();

client.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : 'https://api.github.com/';
client.defaults.withCredentials = true;

const requestEvent = new CustomEvent('request');
const requestEndEvent = new CustomEvent('request-end');

async function request<T>(method: Method, url: string, body?: T, multipart?: boolean): Promise<AxiosResponse> {
  window.dispatchEvent(requestEvent);
  const multipartOption = multipart && { 'Content-Type': 'multipart/form-data' };
  try {
    const res = await client({
      method,
      url,
      headers: {
        ...multipartOption,
        // 'Access-Control-Allow-Origin': '*',
      },
      ...(body && { data: body }),
    });
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    window.dispatchEvent(requestEndEvent);
  }
}

export default request;
