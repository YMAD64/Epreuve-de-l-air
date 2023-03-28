const args = process.argv.slice(2)
let newargs = []
function getNumber(array, newArray){


    for (let i=0 ; i<array.length ; i++){
        newArray.push(parseInt(array[i]))
    }

}
 
getNumber(args, newargs)



let arg2 = newargs.pop()
let arg1 = newargs


function add(array, number){
    newArray = []
    for(let i = 0 ; i < array.length ; i++){
        newArray.push(array[i]+number)
    }return newArray
}

console.log(add(arg1, arg2).join(' '));


