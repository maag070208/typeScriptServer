"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//aqui van nuestras rutas
const indexRoute_1 = __importDefault(require("./routes/indexRoute"));
const encuestadoRoute_1 = __importDefault(require("./routes/encuestadoRoute"));
const bodyParser = require('body-parser');
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //Configuraciones del servidor
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(bodyParser.json({ limit: '100mb' }));
        this.app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //aqui insertamos la rutas 
    routes() {
        this.app.use('/', indexRoute_1.default);
        this.app.use('/encuestado', encuestadoRoute_1.default);
    }
    //aqui iniciamos el servidor 
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
