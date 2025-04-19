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