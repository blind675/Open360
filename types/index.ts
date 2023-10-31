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
  followersEmails?: String[];
  lastUpdatedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends DocumentResult<IUser> {
  _id: string;
  email: string;
  name: string;
  followingProjectIDs?: String[];
  imageURL?: string;
  createdAt: Date;
  updatedAt: Date;
}
