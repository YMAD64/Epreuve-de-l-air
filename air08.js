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

    console.log(sorted_fusion(arg1,arg2).join(' '));
}

