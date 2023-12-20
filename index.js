const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connect = require("./src/utils/db");
const { configCloudinary } = require("./src/middlewares/files.middleware");

const server = express();
//servidor conectado
connect();
configCloudinary();

server.use(
  cors({
    origin: ["https://campcesible.vercel.app/"],
  })
);
app.use(
  cors({
    origin: ["https://campcesible.vercel.app/"],
  })
);
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//routes
const CampingRouter = require("./src/api/routes/camping.routes");
server.use("/campings", CampingRouter);
const AccesibleRouter = require("./src/api/routes/accesible.routes");
server.use("/accesibles", AccesibleRouter);
const EntornoRouter = require("./src/api/routes/entorno.routes");
server.use("/entornos", EntornoRouter);
/*const ProvinciaRouter = require("./src/api/routes/provincia.routes");
server.use("/provincias", ProvinciaRouter);*/
const ParqueAcuaticoRouter = require("./src/api/routes/parqueacuatico.routes");
server.use("/parquesacuaticos", ParqueAcuaticoRouter);
const UsuarioRouter = require("./src/api/routes/usuario.routes");
server.use("/usuario", UsuarioRouter);
const ComentarioRouter = require("./src/api/routes/comentario.routes");
server.use("/comentarios", ComentarioRouter);
const TodolistRouter = require("./src/api/routes/todolist.routes");
server.use("/todolist", TodolistRouter);
const BlogcomRouter = require("./src/api/routes/blogcom.routes");
server.use("/blogcom", BlogcomRouter);

server.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server runnin on http://localhost:${PORT}`);
});
