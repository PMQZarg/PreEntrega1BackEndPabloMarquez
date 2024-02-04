import fs from "fs/promises";

export class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./src/data/products.json";
  }

  addProduct(product) {
    this.getProducts();
    const {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      quantity,
      status,
      category,
    } = product;

    if (
      title === "" ||
      description === "" ||
      price === "" ||
      thumbnail === "" ||
      code === "" ||
      stock === "" ||
      quantity === "" ||
      status === "" ||
      category === ""
    ) {
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
      fs.writeFile(this.path, JSON.stringify(this.products));
      console.log("Datos guardados con éxito");
    } catch (error) {
      console.error("Error escribiendo en el archivo", error);
    }
  }

  getProducts() {
    try {
      const data = fs.readFile(this.path, "utf8");
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
  updateProduct(id, productActualizado) {
    this.getProducts();
    const existingProduct = this.products.find((product) => product.id === id);

    if (existingProduct === undefined) {
      console.error(`El id ${id} no existe`);
      return;
    }
    const indice = this.products.findIndex((product) => product.id === id);
    this.products[indice] = { id, ...productActualizado };

    try {
      fs.writeFile(this.path, JSON.stringify(this.products));
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

  const newProduct = {
    id: this.products.length +1,
    title: title,
    description: description,
    price: price,
    thumbnail: thumbnail,
    code: code,
    stock: stock,
    quantity: quantity,
    category: String,
    status: Boolean,
  };

