
function Addfunc(){

let p = document.getElementById('count')
let c = p.textContent
c++
p.textContent = c
}


function subfunc(){
let p = document.getElementById('count')
let c = p.textContent
if(p.textContent > 0){
c--
}
else{
   console.log(" num less than 0")
}
p.textContent = c
}


function Refunc(){

let p = document.getElementById('count')
let c = 0
p.textContent = c
}


function evenodd(){
    const s = document.getElementById('count')
    const h = document.getElementById('show')
    if(s.textContent % 2 == 0){
        h.textContent = "Even"
    }
    else{
        h.textContent = "Odd"
    }
}