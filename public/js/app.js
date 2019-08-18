console.log("client side file loaded")


const weatherform=document.querySelector("form")
const search=document.querySelector("input")
const messageone=document.querySelector("#p1")
const messagetwo=document.querySelector("#p2")
weatherform.addEventListener("submit",(e)=>{
    e.preventDefault()
    const location=search.value;
    messageone.textContent="loading..."
    messagetwo.textContent=""
    fetch("/weather?address="+location).then((response)=>{
 response.json().then((data)=>{
    if(data.error){
    //console.log(data.error)
    messageone.textContent=data.error
}

    else{
   // console.log(data.location)
    //console.log(data.data)
    messageone.textContent=data.location
    messagetwo.textContent=data.data
}
 })   
})
//console.log(location)
})