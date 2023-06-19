const notfound = (req,res,next)=>{
    const error  = new Error("url not found");
    res.status(404);
    next(error)

}

const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode ===200?500: res.statusCode;
    let message = err.message;
    res.status(statusCode).json({
        message,
        stack:err.stack
    })
   
}

module.exports ={
    notfound,
    errorHandler
}