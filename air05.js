// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)
let newArgs = []

function getNumber(array, newArray){
    for (let i=0 ; i<array.length ; i++){
        newArray.push(parseInt(array[i]))
    }
}
getNumber(args, newArgs)

let arg2 = newArgs.pop()
let arg1 = newArgs

// 2 FONCTIONS
function argsFalse(tab){

    for (let i=0 ; i<tab.length ; i++){
        if(isNaN(tab[i])){
        return true
        }
    }
    return false
}

function add(array, number){
    newArray = []
    for(let i = 0 ; i < array.length ; i++){
        newArray.push(array[i]+number)
    }return newArray
}

// 3 GESTION D'ERREUR

if((args.length < 2) || (argsFalse(args))){
    console.log("error");
}

// 4 RESOLUTION

else console.log(add(arg1, arg2).join(' '));

