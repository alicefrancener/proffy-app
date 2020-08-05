import { Request, Response } from "express";

import db from "../database/connection";

export default class ConnectionsController {
  async index(request: Request, response: Response) {}

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    const insertedConnections = await db("connections").insert({ user_id });
    const connection_id = insertedConnections[0];

    return response.status(201).send({ connection_id });
  }
}
