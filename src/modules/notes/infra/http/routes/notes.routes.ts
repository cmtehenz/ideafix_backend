import { Router } from "express";

import NotesController from "../controllers/NotesController";

const notesRouter = Router();
const notesController = new NotesController();

notesRouter.post("/", notesController.create);
notesRouter.get("/", notesController.index);

export default notesRouter;
