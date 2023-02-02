import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "services";
import { API_URL } from "shared/constants";

export const fetchAllCategories = createAsyncThunk<string[]>(
  "shop/fetchAllCategories",
  async () => {
    const response = await fetch(`${API_URL}/products/categories`);
    const data = await response.json();
    return data;
  }
);

const enum RequestState {
  success = "успешно",
  error = "ошибка",
  loading = "загрузка",
}

interface IShopState {
  categories: string[] | undefined;
  statusByCategories: RequestState | undefined;
}

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categories: [],
    statusByCategories: undefined,
  } as IShopState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state, action) => {
      state.statusByCategories = RequestState.loading;
    });
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.statusByCategories = RequestState.success;
      state.categories = action.payload;
    });
    builder.addCase(fetchAllCategories.rejected, (state, action) => {
      state.statusByCategories = RequestState.error;
    });
  },
});

export const getStatusCategories = (state: RootState) =>
  state.shop.statusByCategories;
export const getDataCategories = (state: RootState) => state.shop.categories;
