const routeError = (request, response) => {
    response.status(404).json({
        message: `Error en la ruta ${request.url}, chequea que esté bien escrita. El método ${request.method} no fue implementado.`
    })
}

export default routeError