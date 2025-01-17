import { Request, Response } from 'express';

export const homepageGetHandler = (req: Request, res: Response) => {
    res.render('index');
};

export const todoGetHandler = (_: Request, res: Response) => {};