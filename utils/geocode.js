const request=require("request")
const geocode=(address,callback)=>
{
const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?types=poi&access_token=pk.eyJ1IjoicG1hbHZpeWEiLCJhIjoiY2p4dDY5eng0MGFoNjNtdDZjczM2dGZzMSJ9.ZeWTwRKVir7Ml_6X-Kowbg"
request({url,json:true},(error,response)=>{
if(error){
    callback("unable to connect to service",undefined)
}
else if(response.body.features.length==0){
    callback("cannot find address",undefined)
}
else{
    callback(undefined,{
        longitude:response.body.features[0].center[0],
        latitude:response.body.features[0].center[1],
        location:response.body.features[0].place_name
    })
}
})
}
module.exports=geocode