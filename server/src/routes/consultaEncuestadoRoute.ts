import { consultaEncuestadoController } from './../controllers/consultaEncuestadoController';
import { Router } from 'express';

class ConsultaEncuestadoRoute {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.post('/', consultaEncuestadoController.insert);
    }
}

const consultaEncuestadoRoute = new ConsultaEncuestadoRoute();
export default consultaEncuestadoRoute.router;