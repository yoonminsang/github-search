export interface ISearchUsertParams {
  search: string;
}

export interface IUser {
  login: string;
  avatar_url: string;
  favorite?: boolean;
}
