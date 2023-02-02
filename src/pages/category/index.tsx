import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { getInCategory } from "../../shared/api/categories";
import { IProduct } from "../../shared/interface/product";
import { ProductCard } from "../../widget/components/card";

export const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const start = async (categoryName: string) => {
      setProducts((await getInCategory(categoryName)).data);
    };
    if (categoryName) start(categoryName);
  }, [categoryName]);

  return (
    <div>
      <h1>{categoryName}</h1>
      <Grid container spacing={2}>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Grid item xs={4} key={index}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}
      </Grid>
    </div>
  );
};
