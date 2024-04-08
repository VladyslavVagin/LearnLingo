import { useSelector } from "react-redux";
import {
  selectTeachers,
  selectError,
  selectIsLoadTeachers,
  selectFavorites
} from "../redux/teachersSlice";

export const useTeachers = () => {
  const teachers = useSelector(selectTeachers);
  const errorTeachers = useSelector(selectError);
  const isLoadTeachers = useSelector(selectIsLoadTeachers);
  const favorites = useSelector(selectFavorites);

  return {
    teachers,
    errorTeachers,
    isLoadTeachers,
    favorites
  };
};
