import axios, { AxiosResponse } from "axios";
import { IProduct } from "../interface/product";

export const getAllCategories = async (): Promise<AxiosResponse<string[]>> => {
  return await axios.get("https://fakestoreapi.com/products/categories");
};

export const getInCategory = async (
  category: string
): Promise<AxiosResponse<IProduct[]>> => {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`);
};
