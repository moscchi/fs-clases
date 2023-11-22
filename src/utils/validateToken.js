import jwt from "jsonwebtoken";
import UsuarioModel from "../models/users.models.js";

const validateToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Token no encontrado." });

  try {
    const { email } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await UsuarioModel.findOne({ email });

    if (!user) return res.status(401).json({ message: "Token inválido." });

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Token inválido." });
  }
};

export default validateToken;
