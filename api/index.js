const express = require("express");
const routers = require("./routers");

const app = express();

const port = 3000;

routers(app);

app.listen(port, () => console.log(`Servidor esta rodando na porta ${port}.`));

module.exports = app;