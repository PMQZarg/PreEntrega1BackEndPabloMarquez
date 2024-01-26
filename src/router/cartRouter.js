import {Router} from "express";
import {cartManager} from "../manager/cartManager.js";

export {cartRouter};
const router = express.router();


const app = express();
const PORT = 8080;
//  middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// endpoints
/*let comidas = [
  { id: 1, titulo: "Empanada Árabe" },
  { id: 2, titulo: "Empanada carne" },
  { id: 3, titulo: "Empanada JyQ" },
  { id: 4, titulo: "Ensalada Lechuga, tomate, cebolla" },
  { id: 5, titulo: "Ensalada rusa" },
  { id: 6, titulo: "Ensalada Ceasar" },
  { id: 7, titulo: "Pizza fugazzeta" },
  { id: 8, titulo: "Pizza fugazzeta rellena con JyQ" },
  { id: 9, titulo: "Hamburguesa casera" },
  { id: 10, titulo: "Hamburguesa casera con queso cheddar" },
];*/

// obtener es GET
app.get("/comidas", (req, res) => {
  res.json(comidas);
});

// método Get que obtiene una tarea por Id
app.get("/comidas/:id", (req, res) => {
  const comidaId = parseInt(req.params.id);
  console.log(comidaId);
  const comida = comidas.find((c) => c.id === comidaId);
  console.log(comida);
  if (comida) {
    res.json(comida);
  } else {
    res.status(404).json({ message: "No se encontró la comida" });
  }
});

// método Post sirve para crear una tarea, postearla
app.post("/comidas", (req, res) => {
  const { titulo } = req.body;
  const nuevaComida = {
    id: comidas.length + 1,
    titulo: titulo || "Comida por default",
  };
  comidas.push(nuevaComida);
  res.status(201).json(nuevaComida);
});

// método Put para modificar una tarea
app.put("/comidas/:id", (req, res) => {
  const comidaId = parseInt(req.params.id);
  const comida = comidas.find((c) => c.id === comidaId);
  if (comida) {
    const { titulo } = req.body;
    comida.titulo = titulo;
    res.json(comida);
  } else {
    res.status(404).json({ message: "Comida no encontrada" });
  }
});

// método Delete para borrar una tarea por id
app.delete("/comidas/:id", (req, res) => {
  const comidaId = parseInt(req.params.id);
  const comida = comidas.filter((c) => c.id !== comidaId);
  // console.log(comida);
  res.json ({message: "Comida eliminada correctamente"})  
  comidas=comida
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
