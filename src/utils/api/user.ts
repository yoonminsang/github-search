import { AxiosResponse } from 'axios';
import { ISearchUsertParams, IUser } from '@/types/user';
import request from './request';

export const searchUser = ({ search }: ISearchUsertParams): Promise<AxiosResponse> =>
  request('GET', `/search/users?q=${search}&per_page=100`);
