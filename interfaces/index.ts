export interface PostInterface {
  id: number;
  title: string | null;
  body: string;
  userId: string;
}

export interface IUser {
  id: number;
  uuid?: string;
  firstname?: string;
  lastname?: string;
  email: string;
  username: string;
}

export interface IPost {
  title: string;
  content: string;
  date: Date;
}
