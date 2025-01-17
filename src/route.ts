import { Router } from 'express';
import { homepageGetHandler } from './handler';
import { todoGetHandler } from './handler';

const router = Router();

router.get('/', homepageGetHandler);

router.get('/home', todoGetHandler);

export default router;