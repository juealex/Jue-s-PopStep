import { Router } from 'express';
import { indexGetHandler, HomePageGetHandler, groupsGetHandler } from './handler';


const router = Router();

router.get('/', indexGetHandler);

router.get('/home', HomePageGetHandler);

router.get('/groups', groupsGetHandler);

export default router;