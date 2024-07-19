console.log("hello wolrd!");

let saladrecp=document.querySelector(".see");

let salad=document.querySelector(".salad");

let btn=true;

saladrecp.addEventListener("click",()=>{              //height need to be 95 //width to be 150
    console.log("see more");
   if(btn===true){
    salad.style.height="95vmin";
    saladrecp.style.marginTop="35vmin";
    btn=false;
   } 
})
// let again=()=>{
//     saladrecp.addEventListener("click",()=>{
//         btn=true
//        if(btn===true){
//         salad.style.height="60vmin";
//         saladrecp.style.marginTop="1vmin";
//         btn=false; 
//        }
//     })
// }