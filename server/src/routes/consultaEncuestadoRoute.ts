import { consultaEncuestadoController } from './../controllers/consultaEncuestadoController';
import { Router } from 'express';

class ConsultaEncuestadoRoute {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', consultaEncuestadoController.insert);
    }
}

const consultaEncuestadoRoute = new ConsultaEncuestadoRoute();
export default consultaEncuestadoRoute.router;