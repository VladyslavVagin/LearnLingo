import { useSelector } from "react-redux";
import {
  selectTeachers,
  selectError,
  selectIsLoadTeachers,
} from "../redux/teachersSlice";

export const useTeachers = () => {
  const teachers = useSelector(selectTeachers);
  const errorTeachers = useSelector(selectError);
  const isLoadTeachers = useSelector(selectIsLoadTeachers);

  return {
    teachers,
    errorTeachers,
    isLoadTeachers,
  };
};
