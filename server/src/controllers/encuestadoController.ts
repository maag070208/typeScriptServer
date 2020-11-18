import { Request, response, Response } from "express";
import pool from "../database";

class EncuestadoController {
  public async list(req: Request, res: Response): Promise<void> {
    const clientes = await pool.query("SELECT * FROM DATOS_ENCUESTADO");
    res.json(clientes);
  }

  public async insert(req: Request, res: Response): Promise<void> {    
    await  pool.query('INSERT INTO DATOS_ENCUESTADO SET ?',[req.body]);
    res.json({'message': 'Departamento Guardado'});
   }


}

export const encuestadoController = new EncuestadoController();
