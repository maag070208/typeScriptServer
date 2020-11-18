import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

//aqui van nuestras rutas

import indexRoutes from './routes/indexRoute';
import encuestadoRoute from './routes/encuestadoRoute';
import consultaEncuestadoRoute from './routes/consultaEncuestadoRoute';
const bodyParser = require('body-parser');

class Server {
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    //Configuraciones del servidor
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(bodyParser.json({ limit: '100mb' }))
        this.app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }))
        this.app.use(express.urlencoded({extended: false}));
    }

    //aqui insertamos la rutas 
    routes():void{
        this.app.use('/', indexRoutes);
        this.app.use('/encuestado',encuestadoRoute);
        this.app.use('/encuestado/select',consultaEncuestadoRoute);
    }

    //aqui iniciamos el servidor 
    start():void{
		this.app.listen(this.app.get('port'), () => {
			console.log('Server on port', this.app.get('port'));
		});
    }
    
}
const server = new Server();
server.start();