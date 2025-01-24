import { Router } from 'express';
import { indexGetHandler, HomePageGetHandler } from './handler';


const router = Router();

router.get('/', indexGetHandler);

router.get('/home', HomePageGetHandler);

export default router;