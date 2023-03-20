// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2).join(' ')

// 2 FONCTIONS

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

 
// 3 GESTION D'ERREUR

if(args.length < 1){
    console.log("error");
}

// 4 RESOLUTION

else console.log(mySplit(args, " "))

