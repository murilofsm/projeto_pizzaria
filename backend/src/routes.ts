import { Router, Request, Response } from "express";

const router = Router();

router.get("/test", (req: Request, res: Response) => {

    return res.json({ nome: 'Murillus Pizza' });
//   throw new Error("Erro ao fazer essas requisição");
});

export { router };
