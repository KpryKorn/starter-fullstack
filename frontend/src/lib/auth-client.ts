import { createAuthClient } from "better-auth/react";

export const { signIn, signOut, signUp, useSession, getSession } =
  createAuthClient({
    baseURL: "http://localhost:3000",
  });
