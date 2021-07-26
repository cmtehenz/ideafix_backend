import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateNoteService from "../../../services/CreateNoteService";
import ListNotesService from "../../../services/ListNotesService";

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

  public async index(req: Request, res: Response): Promise<Response> {
    const listNotes = container.resolve(ListNotesService);

    const notes = await listNotes.execute();

    return res.json(notes);
  }
}
