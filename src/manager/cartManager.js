import fs from "fs";
import { ProductManager } from "./productManager.js";

export class CartManager {
  constructor() {
    this.path = "./src/data/carts.json";
  }

  getCarts() {
    try {
      const data = fs.readFileSync(this.path, "utf8");
      this.carts = JSON.parse(data);
      return this.carts;
    } catch (error) {
      console.error("error al leer el archivo", error);
      return [];
    }
  }

  getCartsById(cartId) {
    this.getCarts();
    const cart = this.carts.find((c) => c.id === cid);
    if (cart === undefined) {
      console.log(`El producto con el id ${cid} no existe`);
    } else return cart;
  }

  addProduct(cid, productId) {
    try {
      this.getCarts();
      const cart = this.carts.find((cart) => cart.id === cid);

      if (!cart) {
        throw new Error(`No se encontró el carrito con id ${cartId}`);
      }

      const existingProduct = cart.products.find(
        (product) => product.id === parseInt(productId)
      );

      if (!existingProduct) {
        const product = ProductManager.getProductById(productId);

        if (!product) {
          throw new Error(`No se encontró el producto con id ${productId}`);
        }

        cart.products.push({
          id: parseInt(productId),
          quantity: 1,
        });
      } else {
        existingProduct.quantity++;
      }

      fs.writeFileSync(this.path, JSON.stringify(this.carts));
      return cart;
    } catch (error) {
      console.error("Error al agregar producto al carrito", error);
      throw error;
    }
  }

  deleteCart(cid, productId) {
    this.getCarts();
    if (this.carts.find((product) => product.id) === undefined) {
      console.error(`El id $ {cid} no existe`);
      return;
    }

    /*const indice = cart.products.findIndex((product) => product.id === id);
    cart.products.splice(indice, 1);*/
    if (indice === -1) {
      throw new Error(
        `No se encontró el producto con id ${productId} en el carrito con id ${cId}`
      );
    }

    const product = cart.products[indice];

    if (product.quantity > 1) {
      product.quantity--;
    } else {
      cart.products.splice(indice, 1);
    }

    try {
      fs.writeFileSync(this.path, JSON.stringify(this.products));
      console.log("El producto ha sido borrado");
    } catch (error) {
      console.error("Error borrando el producto", error);
    }
  }
}
