const express=require("express")
const app=express()
app.use(express.static("./public"))
const forecast=require("./utils/forecast")
const geocode=require("./utils/geocode")
const address=process.argv[2];
const port=process.env.PORT||3000

app.get("/weather",(req,res)=>{
    const address=req.query.address
    if(!address){
        return res.send({error:"Please provide an address"})
    }
    geocode(address,(error,{longitude,latitude,location}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(longitude,latitude,(error,forecastdata)=>{
            if(error){
           return res.send({error:error})}

           res.send({location:location,data:forecastdata})
    
            })
        }) 
    })
app.listen(port)
console.log("server is running on port no"+port)

