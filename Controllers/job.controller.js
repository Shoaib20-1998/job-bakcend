const { Newjob } = require("../Model/job.model")


const Getjobdata=async(req,res)=>{
   const{role,language}=req.query; 
    try {
        if(role&&language){
            const data = await Newjob.find({"role":role,"language":language})
            res.send(data)
        }
        else if(language){
            const data = await Newjob.find({"language":language})
            res.send(data)
        }else if(role){
            const data = await Newjob.find({"role":role})
            res.send(data)     
        }else{
            const data = await Newjob.find()
            res.send(data)
        }
        
    } catch (error) {
        res.send(error)    
    }
}

const Postdata=async(req,res)=>{
    try {
        const data = new Newjob(req.body)
        data.save()
        res.send(req.body)  
    } catch (error) {
        
    } 
    
}

module.exports={
    Getjobdata,Postdata
}


