import { Request, response, Response } from "express";
import pool from "../database";

class EncuestadoController {
  public async list(req: Request, res: Response): Promise<void> {
    const clientes = await pool.query("SELECT * FROM DATOS_ENCUESTADO");
    res.json(clientes);
  }


}

export const encuestadoController = new EncuestadoController();
