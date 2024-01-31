import express from "express";
import Index from "./src/router/indexRouter.js";
import { ProductManager } from "./src/manager/productManager.js";
import { CartManager } from "./src/manager/cartManager.js";
import router from "./src/router/cartRouter.js";

const app = express();
const PORT = 8080;
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const productManager = new ProductManager(pathProducts);
export const cartManager = new CartManager(pathCarts);

app.use("/api", Index);
app.use("/api/products", routerProducts);
app.use("/api/carts", routerCarts);

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
});
