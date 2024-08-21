const hexadecimalarray=[0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"]
let firstcontainer=document.getElementById("firstcolour")
let secondcontainer=document.getElementById("secondcolour")
let thirdcontainer=document.getElementById("thirdcolour")
let firstparagraphexcode=document.getElementById("firsthexcode")
let secondparagraphexcode=document.getElementById("secondhexcode")
let thirdparagraphexcode=document.getElementById("thirdhexcode")
let button=document.getElementById("buttoncode")

function generaterandomnumber(){
    let random=Math.random()*hexadecimalarray.length
    let roundedrandomnumber=Math.floor(random)
    return roundedrandomnumber

}
generaterandomnumber()

button.addEventListener("click",function(){
    let hexcodeforfirstbox="#"
for(let myfirstloop=0;myfirstloop<6;myfirstloop++){
    hexcodeforfirstbox+=hexadecimalarray[generaterandomnumber()]
}
firstcontainer.style.backgroundColor=hexcodeforfirstbox
firstparagraphexcode.textContent=hexcodeforfirstbox


let hexcodeforsecondbox="#"
for(let mysecondloop=0;mysecondloop<6;mysecondloop++){
    hexcodeforsecondbox+=hexadecimalarray[generaterandomnumber()]
}
secondcontainer.style.backgroundColor=hexcodeforsecondbox
secondparagraphexcode.textContent=hexcodeforsecondbox

let hexcodeforthirdbox="#"
for(let mythirdloop=0;mythirdloop<6;mythirdloop++){
    hexcodeforthirdbox+=hexadecimalarray[generaterandomnumber()]
}
thirdcontainer.style.backgroundColor=hexcodeforthirdbox
thirdparagraphexcode.textContent=hexcodeforthirdbox


})