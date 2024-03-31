import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/usersSlice";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userAuth = useSelector(selectUser);

  return {
    isLoggedIn,
    userAuth,
  };
};
