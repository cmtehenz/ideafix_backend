import { injectable, inject } from "tsyringe";

import { Note } from "../infra/typeorm/entities/Note";
import INotesRepository from "../repositories/INotesRepository";

interface IRequest {
  title: string;
  description: string;
}

@injectable()
class CreateNoteService {
  constructor(
    @inject("NotesRepository")
    private notesRepository: INotesRepository
  ) {}

  public async execute({ title, description }: IRequest): Promise<Note> {
    const note = await this.notesRepository.create({
      title,
      description,
    });

    return note;
  }
}

export default CreateNoteService;
