import express from "express";
import Index from "./src/router/indexRouter.js";
import { ProductManager } from "./src/manager/productManager.js";
import { CartManager } from "./src/manager/cartManager.js";
import cartRouter from "./src/router/cartRouter.js";
import productRouter from "./src/router/productsRouter.js";

const app = express();
const PORT = 8080;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const productManager = new ProductManager(pathProducts);
export const cartManager = new CartManager(pathCarts);

app.use("/api", Index);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
});