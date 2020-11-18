import { Request, response, Response } from "express";
import pool from "../database";

class ConsultaEncuestadoController {

  public async insert(req: Request, res: Response): Promise<void> { 
      const {nombre} = req.body;   
      const sql = `SELECT  NOMBRE, APELLIDOP, APELLIDOM, TELEFONO_CASA, CELULAR, TIPO_CELULAR, CORREO, CURP, DOMICILIO, VIGENCIA, DISTRITO_ESTATAL, DISTRITO_FEDERAL, SECCION, ID FROM DATOS_ENCUESTADO WHERE (NOMBRE LIKE '%${nombre}%')`;
    await  pool.query(sql);
    res.json({'message': 'Encontrado'});
   }


}

export const consultaEncuestadoController = new ConsultaEncuestadoController();