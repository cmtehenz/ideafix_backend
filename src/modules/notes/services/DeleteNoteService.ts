import { injectable, inject } from "tsyringe";

import INotesRepository from "../repositories/INotesRepository";

interface IRequest {
  id: string;
}

@injectable()
class DeleteNoteService {
  constructor(
    @inject("NotesRepository")
    private notesRepository: INotesRepository
  ) {}

  public async execute({ id }: IRequest) {
    this.notesRepository.delete(id);
  }
}

export default DeleteNoteService;
