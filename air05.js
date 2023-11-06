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


//////////////////////////////////////////////////
//06/11/23////////////////////////////////////////

// const args = process.argv.slice(2)

// let args_number = []

// function get_number(array,new_array){
//     for (let i=0 ; i<array.length ; i++){
//         new_array.push(parseInt(array[i]))
//     } return new_array
// }

// get_number(args, args_number)

// let arg2 = args_number.pop()
// let arg1 = args_number

// // console.log(arg1);
// // console.log(arg2);

// function add(array, number){
//     let add_array = []
//     for (let i=0 ; i<array.length ; i++){
//         add_array.push(array[i]+number)
//     } return add_array
// }

// console.log(add(arg1, arg2));

