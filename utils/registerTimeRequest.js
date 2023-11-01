const registerTimeRequest = (request, response, next) => {
  const now = new Date();
  const time = `${now.getFullYear()}:${now.getMonth()+1}:${now.getDate()}:Ejecucion a las ${now.getHours()}:${now.getMinutes()}.`;
  console.log(time);
  next()
};

module.exports = { registerTimeRequest }