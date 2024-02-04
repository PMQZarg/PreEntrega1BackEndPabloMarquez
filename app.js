import express from "express";
import Index from "./src/router/indexRouter.js";
import { ProductManager } from "./src/manager/productManager.js";
import { CartManager } from "./src/manager/cartManager.js";

const app = express();
const PORT = 8080;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const pathProducts = "./src/data/products.json";
const pathCarts = "./src/data/carts.json";

app.use("/api", Index);
app.use("/api/products/", router);
app.use("/api/carts/", router);

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
});

export const productManager = new ProductManager(pathProducts);
export const cartManager = new CartManager(pathCarts);
