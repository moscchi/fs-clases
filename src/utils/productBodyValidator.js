const productBodyValidator = (request, response, next) => {
    const { name, description, price, image, stock } = request.body;
      const validationArray = [];
      if(typeof name !== "string") validationArray.push('Name must be string.')
      if(typeof description !== "string") validationArray.push('Description must be string.')
      if(typeof price !== "number") validationArray.push('Price must be number')
      if(price < 0) validationArray.push('Price must be a positive number')
      if(typeof stock !== "number") validationArray.push('Stock must be number')
      if(validationArray.length > 0) {
          return response.status(400).json({message: 'Error en el body, revisa las razones.', errors: validationArray})
      }
      next();
  };
  
  export default productBodyValidator ;
  