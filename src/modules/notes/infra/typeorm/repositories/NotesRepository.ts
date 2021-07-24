import { getRepository, Repository } from "typeorm";

import ICreateNoteDTO from "../../../dtos/ICreateNoteDTO";
import INotesRepository from "../../../repositories/INotesRepository";
import { Note } from "../entities/Note";

class NotesRepository implements INotesRepository {
  private ormRepository: Repository<Note>;

  constructor() {
    this.ormRepository = getRepository(Note);
  }

  public async findById(id: string): Promise<Note | undefined> {
    const note = await this.ormRepository.findOne(id);
    return note;
  }

  public async create(noteData: ICreateNoteDTO): Promise<Note> {
    const note = this.ormRepository.create(noteData);
    await this.ormRepository.save(note);

    return note;
  }

  public async save(note: Note): Promise<Note> {
    return this.ormRepository.save(note);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async delete(id: string) {
    this.ormRepository.delete(id);
  }
}

export default NotesRepository;
