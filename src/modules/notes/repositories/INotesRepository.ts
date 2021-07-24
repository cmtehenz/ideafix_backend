import ICreateNoteDTO from "../dtos/ICreateNoteDTO";
import { Note } from "../infra/typeorm/entities/Note";

export default interface INotesRepository {
  findById(id: string): Promise<Note | undefined>;
  create(data: ICreateNoteDTO): Promise<Note>;
  save(note: Note): Promise<Note>;
  delete(id: string): void;
}
