export interface PostInterface {
  id: number;
  title: string | null;
  body: string;
  userId: string;
}

export interface IUsers {
  id: number;
  uuid: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  username: string;
}
