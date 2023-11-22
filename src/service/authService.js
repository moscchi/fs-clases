import UsuarioModel from "../models/users.models.js";
import bcrypt from "bcryptjs";
import generateJWT from "../utils/generateJWT.js";
const loginService = async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await UsuarioModel.findOne({ email });
    if (!user) {
      return response
        .status(400)
        .json({ message: "Incorrect email or password." });
    }
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      return response
        .status(400)
        .json({ message: "Incorrect email or password." });
    }
    const token = generateJWT(email);
    return response.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
};

const registerService = async (request, response) => {
  try {
    const { email, password } = request.body;
    const newUser = new UsuarioModel({
      email,
      password: bcrypt.hashSync(password),
    });
    await newUser.save();
    return response.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
};
export { loginService, registerService };
