let random = Math.random();
console.log(random)
let a = prompt("enter the first number")
let b = prompt("enter the operation to be performed")
let c = prompt("entr the the second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if (random > 0.4) {

    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)

}
else {
    b = obj[b];
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}
