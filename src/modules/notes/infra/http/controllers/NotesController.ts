import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateNoteService from "../../../services/CreateNoteService";

export default class NotesController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;

    const createNote = container.resolve(CreateNoteService);

    const note = await createNote.execute({
      title,
      description,
    });

    return res.json(note);
  }
}
