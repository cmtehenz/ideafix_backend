import { inject, injectable } from "tsyringe";

import { Note } from "../infra/typeorm/entities/Note";
import INotesRepository from "../repositories/INotesRepository";

interface IRequest {
  note_id: string;
  title: string;
  description: string;
  updated_at?: Date;
}

@injectable()
class UpdateNoteService {
  constructor(
    @inject("NotesRepository")
    private notesRepository: INotesRepository
  ) {}

  public async execute({
    note_id,
    title,
    description,
  }: IRequest): Promise<Note | undefined> {
    const note = await this.notesRepository.findById(note_id);

    if (!note) {
      // Todo
      console.log("Erro ao tentar encontrar nota");
      return undefined;
    }

    note.title = title;
    note.description = description;
    note.updated_at = new Date();

    await this.notesRepository.save(note);

    return note;
  }
}

export default UpdateNoteService;
