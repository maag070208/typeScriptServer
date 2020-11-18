import { Router } from 'express';
import { encuestadoController } from '../controllers/encuestadoController';

class ClienteRoute {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', encuestadoController.list);
        this.router.post('/', encuestadoController.insert);
    }
}

const clienteRoute = new ClienteRoute();
export default clienteRoute.router;