import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "services";
import {
  fetchAllCategories,
  getDataCategories,
  getStatusCategories,
} from "services/slice/shop";
import { useAppDispatch } from "./redux/useAppDispatch";

export function useGetCategories() {
  const dispatch = useAppDispatch();
  const status = useSelector((state: RootState) => getStatusCategories(state));
  const data = useSelector((state: RootState) => getDataCategories(state));

  useEffect(() => {
    console.log(status, "status");
    if (status === undefined) {
      dispatch(fetchAllCategories());
    }
  }, [status, dispatch]);

  // derive status booleans for ease of use
  const isUninitialized = status === undefined;
  const isLoading = status === "загрузка" || status === undefined;
  const isError = status === "ошибка";
  const isSuccess = status === "успешно";

  // return the import data for the caller of the hook to use
  return { data, isUninitialized, isLoading, isError, isSuccess };
}
