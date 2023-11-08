// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)

// 2 FONCTIONS
function definirArgs(array){
    let stop = 0
    arg1 = []
    arg2 = []

    for(let i = 0 ; i < array.length ; i++){
        arg1.push(array[i])
        if(array[i+1]=="fusion"){
        stop = i+1
        break    
        }
    }
    for(let i = stop+1 ; i < array.length ; i++){
        arg2.push(array[i])
    }
    return arg1,arg2
}

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

function sorted_fusion(array1, array2){
    let new_array = array1.concat(array2)
    
    my_bubble_sort(new_array)
    
    return new_array    
}
// 3 GESTION D'ERREUR
definirArgs(args)

if((tabVide(args)) || (argsFalse(arg1)) || (argsFalse(arg2)) || (args.includes('fusion')==false)){
    console.log("error");
}


// 4 RESOLUTION


else if ((tabVide(arg1)==false) && (argsFalse(arg1)==false) && (argsFalse(arg2)==false)){

    console.log(sorted_fusion([1, 2], ).join(' '));
}



console.log()


//////////////////////////////////////////////////
//08/11/23////////////////////////////////////////

// const args = process.argv.slice(2)

// function def_args(array){
//     arg1 = []
//     arg2 = []
//     let stop = 0

//     for(let i=0 ; i<array.length ; i++){
//         arg1.push(parseInt(array[i]))
//         if(array[i+1] == "fusion"){
//             stop = i+1
//             break
//         }
//     }
//     for (let i = stop+1 ; i<array.length ; i++){
//         arg2.push(parseInt(array[i]))
//     } return arg1,arg2
// }
    
// def_args(args)

// function sorted_fusion(array1, array2){
//     new_array = []
//     for(let i=0 ; i<array1.length ; i++){
//         new_array.push(array1[i])
//     }
//     for (let i=0 ; i<array2.length ; i++){
//         new_array.push(array2[i])
//     }
//     for (let i=0 ; i<new_array.length ; i++){
//         for (let j=0 ; j<new_array.length ; j++){
//             if (new_array[j]>new_array[j+1]){
//                 [new_array[j],new_array[j+1]]=[new_array[j+1],new_array[j]]
//             }
//         }
//     } return new_array
    
// }

// console.log(sorted_fusion(arg1,arg2).join(' '));