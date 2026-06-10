import { Router } from 'express';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';

import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

import {
  getAllNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const notesRoutes = Router();

notesRoutes.get('/notes', celebrate(getAllNotesSchema), getAllNotes);

notesRoutes.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);

notesRoutes.post('/notes', celebrate(createNoteSchema), createNote);

notesRoutes.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);

notesRoutes.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default notesRoutes;
