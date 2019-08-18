const request=require("request")
const forecast=(long,lat,callback)=>{
    const url="https://api.darksky.net/forecast/ea50494f3fbc098e367a9466e999e112/"+long+","+lat+"/?units=si"
    request({url,json:true},(error,response)=>{
        if(error){
        callback("Unable to connect service",undefined)}
        else if(response.body.currently.length==0){
            callback("provide proper coordinates",undefined)
        }
        else{
            callback(undefined,
                response.body.currently.summary+"There is"+response.body.currently.precipProbability+"% chance of rain"

            )
        }

    })
}
module.exports=forecast