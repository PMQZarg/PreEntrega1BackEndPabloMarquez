import express from "express";
import { ProductManager } from "./manager/productManager.js";
import { CartManager } from "./manager/cartManager.js";
import Index from "./router/indexRouter.js";
import productsRouter from "./router/productsRouter.js";
import cartsRouter from "./router/cartRouter.js";

const app = express();
const PORT = 8080;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pathProducts = "./src/data/products.json";
const pathCarts = "./src/data/carts.json";

export const productManager = new ProductManager(pathProducts);
export const cartManager = new CartManager(pathCarts);

app.use("/api", Index);
app.use("/api/products/", productsRouter);
app.use("/api/carts/", cartsRouter);

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en :${PORT}`);
});
