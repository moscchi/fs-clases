const setMarkInRequest = (request, response, next) => {
    request.mark = 'Educacion IT'
    next()
}

module.exports = { setMarkInRequest }