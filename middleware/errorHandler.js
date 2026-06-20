const errorHandler = (error, req, res, next) => {
    res.status(500).json({
        message: "Server Error",
        error: error.message
    });
};

module.exports = errorHandler;