import express from 'express'
import { AllTask, CreateTask, DeleteTask, EditTask, SingleTask } from '../controller/Task.js';
export let router = express.Router();
router.post('/',CreateTask)
router.put('/:id',EditTask)
router.delete('/:id',DeleteTask)
router.get('/:id',SingleTask)
router.get('/',AllTask)