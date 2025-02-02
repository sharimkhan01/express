const logger = (req,res,next) => {
    console.log(`Requested method : ${req.method} at ${new Date()}`);
    next();
}

module.exports = logger;