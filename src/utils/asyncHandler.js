const asyncHandeler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err => next(err)))
    }
}





export {asyncHandeler}






/*
const asyncHandeler = (fn) => async (req, res, rext) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
*/