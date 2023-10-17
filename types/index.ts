export interface DocumentResult<T> {
  _doc: T;
  $isNew: boolean;
}

export interface IProject extends DocumentResult<IProject> {
  _id: string;
  url: string;
  title: string;
  description: string;
  iconImg?: string;
  tagLine: string;
  backgroundImg: string;
  progress: string;
  createdAt: Date;
  updatedAt: Date;
}
