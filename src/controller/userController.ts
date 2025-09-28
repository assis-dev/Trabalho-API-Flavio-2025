import { Request, Response } from "express";
import * as userBusiness from "../business/userBusiness";

export const getUserByIdController = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id as string);

  if (isNaN(userId)) {
    return res.status(400).json({
      success: false,
      message: "ID do usuário inválido. Por favor, forneça um número.",
    });
  }

  const user = userBusiness.getUserById(userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Usuário não encontrado.",
    });
  }

  res.json({
    success: true,
    data: user,
  });
};

export const getUsersByAgeRangeController = (req: Request, res: Response) => {
  const min = parseInt(req.query.min as string);
  const max = parseInt(req.query.max as string);

  if (isNaN(min) || isNaN(max)) {
    return res.status(400).json({
      success: false,
      message: "Parâmetros inválidos. Informe min e max como números.",
    });
  }

  const users = userBusiness.getUsersByAgeRange(min, max);

  if (users.length === 0) {
    return res.status(404).json({
      success: false,
      message: "Nenhum usuário encontrado na faixa etária especificada.",
    });
  }

  res.status(200).json({
    success: true,
    users,
  });
};
