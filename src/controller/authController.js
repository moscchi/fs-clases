import { loginService, registerService } from "../service/authService.js";

const loginController = async (request, response) => {
  return await loginService(request, response);
};
const registerController = async (request, response) => {
  return await registerService(request, response);
};
export { loginController, registerController };
