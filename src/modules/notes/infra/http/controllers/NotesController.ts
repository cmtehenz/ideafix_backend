import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateNoteService from "../../../services/CreateNoteService";
import DeleteNoteService from "../../../services/DeleteNoteService";
import ListNotesService from "../../../services/ListNotesService";
import UpdateNoteService from "../../../services/UpdateNoteService";

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

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteNote = container.resolve(DeleteNoteService);

    await deleteNote.execute({ id });

    return res.status(204).send();
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { note_id } = req.params;
    const { title, description } = req.body;

    const updateNote = container.resolve(UpdateNoteService);

    const note = await updateNote.execute({
      note_id,
      title,
      description,
    });

    return res.json(note);
  }
}
