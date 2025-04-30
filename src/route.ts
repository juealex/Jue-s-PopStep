import { Router } from 'express';
import { indexGetHandler, HomePageGetHandler, groupsGetHandler, searchGetHandler, search2GetHandler, albumsGetHandler } from './handler';


const router = Router();

router.get('/', indexGetHandler);

router.get('/home', HomePageGetHandler);

router.get('/groups', groupsGetHandler);

router.get('/search', searchGetHandler);

router.get('/search2', searchGetHandler);

router.get('/albums', albumsGetHandler);

export default router;