import { inject, injectable } from "tsyringe";

import { Note } from "../infra/typeorm/entities/Note";
import INotesRepository from "../repositories/INotesRepository";

@injectable()
class ListNotesService {
  constructor(
    @inject("NotesRepository")
    private notesRepository: INotesRepository
  ) {}

  public async execute(): Promise<Note[]> {
    const notes = await this.notesRepository.findAll();
    return notes;
  }
}

export default ListNotesService;
