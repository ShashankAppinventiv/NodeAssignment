const fs=require("fs")

//constants
let fileExits=false;
let file1Exits=false,file2Exist=false;
let fileName=`./backup/TextFile_${Date.now()}.txt`;


exports.postRequest=async (req,res)=>{
    let file1=req.body.file1;
    let file2=req.body.file2;
    let check=false
    
    await fileExist(file1,file2).then((e)=>{
        check=e;
    }).catch((error)=>{
        res.send("File Not found")
    })
       
       if(check)
       {
        await merge1(file1).then().catch((error)=>{
            console.log(error);
           })
           
           await merge2(file2).then().catch((error)=>{
            console.log(error);
           })
           res.send("Merge Successfully")
       }
       else
       {
        res.send("File not found")
       }

}

//modules that are call by above postRequest


function fileExist(f1,f2){
    return new Promise((resolve,reject)=>{
        fs.readdir('uploads',(err,files)=>{
            if(err){
                reject("File not found")
            }
            for(let i=0;i<files.length;i++)
            {
                if(f1==files[i])
                {
                    file1Exits=true;
                }
                if(f2==files[i])
                {
                    file2Exist=true;
                }
                if(file1Exits&&file2Exist)
                {
                    resolve(true)
                    break;
                }
            }
            reject(false)
        })
    })
}
function merge2(file2)
{
    return new Promise((resolve,reject)=>{

        fs.readFile(`./uploads/${file2}`,"utf8",(err,data) => {
            if(err)
            {
                reject("Error in file reading")
            }
            fs.appendFile(fileName,data,(error)=>{
                if(err) throw err;
            })
            
        })
        resolve()
    })
}
function merge1(file2)
{

    return new Promise((resolve,reject)=>{
        fs.readFile(`./uploads/${file2}`,"utf8",(err,data) => {
            if(err)
            {
                reject("Error in file reading")
            }
            if(!fileExits)
            {
                fileExits=true;
                fs.writeFile(fileName,data,(error)=>{
                    if(err) throw err;
                })
            }
            else
            {
                fs.appendFile(fileName,data,(error)=>{
                    if(err) throw err;

                })
            }
        })
        resolve()
    })
}    
