export const notFound =(req,res,next)=>{
  const err=new Error("Route Unknown")
  err.status=404
  next(err)
}

export const errorHandler = (error, req, res, next) => {
    res.status(error.status||400).send(error.message);
  };
  
  export const logger = (req, res, next)=>{
    if (process.env.DEBUG==="true"){
      console.log(req.url);
   
    } 
      next()
    
   
  }
  