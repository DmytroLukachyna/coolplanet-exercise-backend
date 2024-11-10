export type UserByIDRequest = UserIdParam;

export type UserByIDResponse = UserData;

export type UsersResponse = UserName[];

export interface UserIdParam {
  id: string;
}

interface Company {
  name: string;
  department: string;
}

type Skill = string | undefined;

export interface UserName {
  id: number;
  first_name: string;
  last_name: string;
}

export interface UserData extends UserName {
  avatar?: string;
  email: string;
  emailVerified: boolean;
  dob: string;
  company: Company;
  skills: Skill[];
}
