const args = process.argv.slice(2).join(' ')



// function mySplit(string_à_couper, string_séparateur){
//     let array = ""
    
//     for (let i=0 ; i<string_à_couper.length ; i++){
//         if(string_à_couper[i] != string_séparateur){
//             array =`${array}${string_à_couper[i]}`            
//         }
//         else if(string_à_couper[i] == string_séparateur){
//             i++
//             array =`${array}, ${string_à_couper[i]}`
                        
//         }

//     }
// array = `[${array}]`
// return(array);

// }


function mySplit(string_à_couper, string_séparateur){
    let array = ""
    
    for (let i=0 ; i<string_à_couper.length ; i++){
        if(string_à_couper[i] != string_séparateur){
            array =`${array}${string_à_couper[i]}`            
        }
        else if(string_à_couper[i] == string_séparateur){
            i++
            array =`${array}\n${string_à_couper[i]}`
            
        }
        
    }
    
    return(array);
    
}

console.log(mySplit(args, " "))
