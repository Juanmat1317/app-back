import express from "express";
import "dotenv/config.js"

const server = express(); // se crea el servidor
const PORT = process.env.PORT || 8080;// se define el puerto

const ready = () => console.log('server ready on port: ' + PORT);
server.listen(PORT,ready)// iniciar servidor

console.log(process.env.NODE_ENV);