
import fs from "fs";
import { ProductManager } from "../../app.js";
export class CartManager {
  constructor() {
    this.products = [];
    this.path = "./src/data/cart.json";
  }

  async getCarts() {
    try {
      const data = await fs.readFile(this.path, "utf8");
      this.carts = JSON.parse(data);
      console.log("El archivo se ha leido con éxito");
    } catch (error) {
      console.log("Error leyendo el archivo", error);
    }
    return this.carts;
  }

  getCartById(cartId) {
    this.getCarts();
    const product = this.carts.find((p) => cart.id === cartId);
    if (cart === undefined) {
      console.log(`El producto con el id ${id} no existe`);
    } else return cart;
  }

  setId() {
    this.lastCartId = this.getLastCartId();
    if (this.lastCartId === 0) this.lastCartId = 1;
    else this.lastCartId++;
    return this.lastCartId;
  }
  getLastCartId() {
    if (this.carts.length === 0) return 0;
    const lastCartId = this.carts[this.carts.length - 1].cartId;
    console.log("Mi último Id es", this.lastCartId);
    return lastCartId;
  }
  async updateCart(id, cartUpdated) {
    await this.getCarts();
    const existingCart = this.carts.find((product) => product.id === id);

    if (existingCart === undefined) {
      console.error(`El id ${id} no existe`);
      return;
    }
    const indice = this.carts.findIndex((product) => product.id === id);
    this.products[indice] = { id, ...cartUpdated };

    try {
      await fs.writeFile(this.path, JSON.stringify(this.carts));
      console.log("Archivo actualizado con éxito");
    } catch (error) {
      console.error("No se ha podido actualizar el archivo", error);
    }
  }

  deleteCart(cartId,id) {
    this.getCarts();
    if (this.products.find((product) => product.id) === undefined) {
      console.error(`El id ${id} no existe`);
      return;
    }

    const indice = this.products.findIndex((product) => product.id === id);
    this.products.splice(indice, 1);
    try {
      fs.writeFileSync(this.path, JSON.stringify(this.products));
      console.log("El producto ha sido borrado");
    } catch (error) {
      console.error("Error borrando el producto", error);
    }
  }
}

main();
