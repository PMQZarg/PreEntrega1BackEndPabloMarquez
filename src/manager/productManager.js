import fs from "fs/promises";

export class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./src/data/products.json";
  }

  async addProduct(product) {
    await this.getProducts();
    const { title, description, price, thumbnail, code, stock } = product;

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son requeridos");
      return;
    }

    if (this.products.some((p) => p.code === code)) {
      console.log("El codigo del producto ya existe");
      return;
    }

    const id = this.setId();
    const newProduct = { id, ...product };
    this.products.push(newProduct);

    try {
      await fs.writeFile(this.path, JSON.stringify(this.products));
      console.log("Datos guardados con éxito");
    } catch (error) {
      console.error("Error escribiendo en el archivo", error);
    }
  }

  async getProducts() {
    try {
      const data = await fs.readFile(this.path, "utf8");
      this.products = JSON.parse(data);
      console.log("El archivo se ha leido con éxito");
    } catch (error) {
      console.log("Error leyendo el archivo", error);
    }
    return this.products;
  }

  getProductsById(id) {
    this.getProducts();
    const product = this.products.find((p) => p.id === id);
    if (product === undefined) {
      console.log(`El producto con el id ${id} no existe`);
    } else return product;
  }

  setId() {
    this.lastId = this.getLastProductId();
    if (this.lastId === 0) this.lastId = 1;
    else this.lastId++;
    return this.lastId;
  }
  getLastProductId() {
    if (this.products.length === 0) return 0;
    const lastProductId = this.products[this.products.length - 1].id;
    console.log("Mi último Id es", this.lastProductId);
    return lastProductId;
  }
  async updateProduct(id, productActualizado) {
    await this.getProducts();
    const existingProduct = this.products.find((product) => product.id === id);

    if (existingProduct === undefined) {
      console.error(`El id ${id} no existe`);
      return;
    }
    const indice = this.products.findIndex((product) => product.id === id);
    this.products[indice] = { id, ...productActualizado };

    try {
      await fs.writeFile(this.path, JSON.stringify(this.products));
      console.log("Archivo actualizado con éxito");
    } catch (error) {
      console.error("No se ha podido actualizar el archivo", error);
    }
  }

  deleteProduct(id) {
    this.getProducts();
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

const productManager = new ProductManager();

const product1 = {
  title: "Producción Musical Integral Full Banda",
  description: "Formato Full Banda",
  price: 100,
  thumbnail: "miMiniatura",
  code: "pmqz1",
  stock: 7,
};

const product2 = {
  title: "Producción Musical Integral Acústico",
  description: "Formato Acústico",
  price: 60,
  thumbnail: "miMiniatura",
  code: "pmqz2",
  stock: 10,
};

async function main() {
  await productManager.addProduct(product1);
  await productManager.addProduct(product2);

  let misProductos = await productManager.getProducts();
  console.log(misProductos);
}

main();
