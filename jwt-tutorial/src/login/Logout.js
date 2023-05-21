import { useContext } from "react";
import { UserContext } from "../main/UserProvider";

export function Logout() {
  const { logout } = useContext(UserContext);

  return <button onClick={logout}>Logout</button>;
}
