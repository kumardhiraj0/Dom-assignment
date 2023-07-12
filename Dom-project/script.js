let btn = document.getElementById("btn");

let randomColor = ()=>{
    let val = "0123456789ABCDEF";
    let cons = "#";

    for(let i = 0 ; i<6 ; i++){
        cons = cons + val[Math.floor(Math.random()*16)];
    }
    return cons;
}
console.log(randomColor());

function ColorChange(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click",ColorChange);