import { useContext, useMemo } from "react";
import { useHttp } from "./base/useHttp";
import { AuthContext, User } from "../../context/AuthContext";
import { ActiveShift, Shift } from "./dtos";

export type AuthData = {
  email: string;
  password: string;
};

interface IRoutes {
  auth: (authData: AuthData) => Promise<User>;
  userHitory: () => Promise<Shift[]>;
  activeShift: () => Promise<ActiveShift>;
  clockIn: () => Promise<void>;
  clockOut: (shiftId: string) => Promise<void>;
}

export const useApi = () => {
  const { user } = useContext(AuthContext);
  const userToken = user?.token || "";

  const httpInstance = useHttp(import.meta.env.VITE_API_URL, {
    Authorization: "Bearer " + userToken,
    "Content-Type": "application/json",
  });

  async function auth({ email, password }: AuthData): Promise<User> {
    return await httpInstance.post<User>("/auth", {
      email,
      password,
    });
  }

  async function userHitory(): Promise<Shift[]> {
    return await httpInstance.get("/shifts");
  }

  async function activeShift(): Promise<ActiveShift> {
    return await httpInstance.get("/shifts/active");
  }

  async function clockIn(): Promise<void> {
    return await httpInstance.post("/shifts/clockIn");
  }

  async function clockOut(shift_id: string): Promise<void> {
    return await httpInstance.patch(`/shifts/clockOut`, { shift_id });
  }

  return useMemo<IRoutes>(
    () =>
      <IRoutes>{
        auth,
        userHitory,
        activeShift,
        clockIn,
        clockOut,
      },
    []
  );
};
