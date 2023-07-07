

const multer =require("multer");


//multer
exports.upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.originalname)
        }
    })
}).single("user_file");

exports.caller=(req,res)=>{
res.send("File Upload Successfully")
}