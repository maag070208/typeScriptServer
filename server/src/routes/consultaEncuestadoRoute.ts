import { consultaEncuestadoController } from './../controllers/consultaEncuestadoController';
import { Router } from 'express';

class ClienteRoute {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', consultaEncuestadoController.insert);
    }
}

const clienteRoute = new ClienteRoute();
export default clienteRoute.router;