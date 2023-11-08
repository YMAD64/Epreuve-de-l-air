// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)
let argsNumber = []
getNumber(args, argsNumber)

let arg2 = argsNumber.pop()
let arg1 = argsNumber

// 2 FONCTIONS

function getNumber(array, newArray){
    for (let i=0 ; i<array.length ; i++){
        newArray.push(parseInt(array[i]))
    }
}

function my_bubble_sort(array){
    for(let i=0 ; i<array.length ; i++){
        for(let j=0 ; j<array.length ; j++){
        
            if(array[j]>array[j+1]){
                valMax = array[j]
                array[j] = array[j+1]
                array[j+1] = valMax
            }
        }     
    } return array
} 

function argsFalse(array){

    for (let i=0 ; i<array.length ; i++){
        if(isNaN(array[i])){
        return true
        }
    }
    return false
}

function tabVide(array){
    if (array.length < 1){
        return true
    }
    return false 
} 

function sorted_insert(array, new_element){
    let new_array = array
    array.push(new_element)
    
    my_bubble_sort(new_array)
    
    return new_array    
}
// 3 GESTION D'ERREUR

if((tabVide(arg1)) || (argsFalse(args))){
    console.log("error");
}


// 4 RESOLUTION


else if ((tabVide(arg1)==false) && argsFalse(args)==false){

    console.log(sorted_insert(arg1,arg2).join(' '));
}


////////////////////////////////////////////////////////////////////
//07/11/23//////////////////////////////////////////////////////////

// const args = process.argv.slice(2)

// let arg2 = args.pop()
// let arg1 = args

// console.log(arg1);
// console.log(arg2);

// function sorted_insert(array, new_element){
//     array.push(new_element)
//     for (let i=0 ; i<array.length ; i++){
//         for (let j=0 ; j<array.length ; j++){
//             if(parseInt(array[j])>parseInt(array[j+1])){
//             [array[j],array[j+1]]=[array[j+1],array[j]]
//             }
//         }
//     } return array
// }

// console.log(sorted_insert(arg1,arg2).join(' '));
