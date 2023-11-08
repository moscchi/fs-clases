const paramValidatorNumber = (request, response, next) => {
  if (!Number(request.params.id) > 0) {
    return response
      .status(400)
      .json({ message: "Param ID must be a positive number." });
  }
  next();
};

export default paramValidatorNumber;
