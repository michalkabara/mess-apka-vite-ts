export interface Player {
  id: string;
  name: string;
  photoUrl: string;
  number: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  roles: string;
  legPreference: string;
}

export interface PagedResponse<T> {
  data: T[];
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  totalCount: number;
}
