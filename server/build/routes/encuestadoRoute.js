"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuestadoController_1 = require("../controllers/encuestadoController");
class ClienteRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', encuestadoController_1.encuestadoController.list);
    }
}
const clienteRoute = new ClienteRoute();
exports.default = clienteRoute.router;
