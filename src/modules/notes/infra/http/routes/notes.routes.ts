import { Router } from "express";

import NotesController from "../controllers/NotesController";

const notesRouter = Router();
const notesController = new NotesController();

notesRouter.post("/", notesController.create);
notesRouter.get("/", notesController.index);
notesRouter.delete("/:id", notesController.delete);
notesRouter.put("/:note_id", notesController.update);

export default notesRouter;
