// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)



// 2 FONCTIONS

function quick_sort(array){
    if (array.length<=1){
        return array
    }
    else{
    
        let left_array = []
        let right_array = []
        let pivot = array[0]
        
        for (let i=1 ; i<array.length ; i++){
            if(parseInt(array[i])<=parseInt(pivot)){
            left_array.push(array[i])
            }
            else if(parseInt(array[i])>parseInt(pivot)){
            right_array.push(array[i])
            }    
        }   return [...quick_sort(left_array),pivot,...quick_sort(right_array)]        
    }
}

function argsError(array){
    if (array.length < 1){
        return true
    }
   
    for (let i=0 ; i<array.length ; i++){
        if (isNaN(array[i])){
        return true
        }
    } return false
}


// 3 GESTION D'ERREUR

if (argsError(args)){
    console.log('error');
}

// 4 RESOLUTION

else console.log(quick_sort(args).join(' '))
