import { Router } from 'express';
import { submitForm } from '../controllers/form.controller';

const router = Router();

router.post('/submit', submitForm);

export default router;
