import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { CategoryPage } from "pages/category";
import { HomePage } from "pages/home";
import { ResponsiveTemplate } from "widget/template";

const AppLayout = () => (
  <>
    <ResponsiveTemplate />
  </>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route element={<CategoryPage />}>
        <Route path="category/:categoryName" element={<CategoryPage />} />
      </Route>
    </Route>
  )
);
