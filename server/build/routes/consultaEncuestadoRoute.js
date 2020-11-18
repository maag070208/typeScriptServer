"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consultaEncuestadoController_1 = require("./../controllers/consultaEncuestadoController");
const express_1 = require("express");
class ClienteRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', consultaEncuestadoController_1.consultaEncuestadoController.insert);
    }
}
const clienteRoute = new ClienteRoute();
exports.default = clienteRoute.router;
