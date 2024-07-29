import { useContext, useMemo } from "react";
import { useHttp } from "./base/useHttp";
import { AuthContext, User } from "../../context/AuthContext";
import { Shift } from "./dtos";

export type AuthData = {
  email: string;
  password: string;
};

interface IRoutes {
  auth: (authData: AuthData) => Promise<User>;
  userHitory: () => Promise<Shift[]>;
}

export const useApi = () => {
  const { user } = useContext(AuthContext);
  const userToken = user?.token || "";

  const httpInstance = useHttp(import.meta.env.VITE_API_URL, {
    Authorization: "Bearer " + userToken,
    "Content-Type": "application/json",
  });

  async function auth({ email, password }: AuthData) {
    return await httpInstance.post<User>("/auth", {
      email,
      password,
    });
  }

  async function userHitory() {
    return await httpInstance.get("/shifts");
  }

  return useMemo<IRoutes>(
    () =>
      <IRoutes>{
        auth,
        userHitory,
      },
    []
  );
};
