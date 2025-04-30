import { Request, Response } from 'express';

export const indexGetHandler = (req: Request, res: Response) => {
    res.render('index');
};

export const HomePageGetHandler = (req: Request, res: Response) => {
    res.render('HomePage');
};

export const groupsGetHandler = (req: Request, res: Response) => {
    res.render('groups');
};

export const searchGetHandler = (req: Request, res: Response) => {
    res.render('search');
};

export const search2GetHandler = (req: Request, res: Response) => {
    res.render('search2');
};

export const albumsGetHandler = (req: Request, res: Response) => {
    res.render('albums');
};
