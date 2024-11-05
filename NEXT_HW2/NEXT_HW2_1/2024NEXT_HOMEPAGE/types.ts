import { User } from "next-auth";

export interface AuthenticatedUser {
  accessToken?: string;
  refreshToken?: string;
}
