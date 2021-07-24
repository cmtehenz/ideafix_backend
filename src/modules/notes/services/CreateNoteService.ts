import { Note } from "../infra/typeorm/entities/Note";

interface IRequest {
  title: string;
  description: string;
}

class CreateNoteService {
  public async execute({ title, description }: IRequest): Promise<Note> {
    const note = "";

    return note;
  }
}
