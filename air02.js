// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)

let arg2 = args.pop()
let arg1 = args

// 2 FONCTIONS

function concat(array_de_strings, séparateur){
    
    let string = ""
    
    for (let i = 0 ; i < array_de_strings.length ; i++){        
        if(i == array_de_strings.length-1){
            string = `${string}${array_de_strings[i]}`
        }
        else string = `${string}${array_de_strings[i]}${séparateur}`    
    }return string
}
 
// 3 GESTION D'ERREUR

if(args.length < 1){
    console.log("error");
}

// 4 RESOLUTION

else console.log(concat(arg1, arg2))

//////////////////////////////////////////////////////////////////////////////////////////
//06/11/23////////////////////////////////////////////////////////////////////////////////


// const args = process.argv.slice(2)

// let arg2 = args.pop()
// let arg1 = args

// // console.log(arg1);
// // console.log(arg2);

// function ma_fonction(array_de_strings, séprateur){
    
//     let string = ""
//     for (let i=0 ; i<=array_de_strings.length-1; i++){
//         if(i < array_de_strings.length-1){
//             string = `${string}${array_de_strings[i]}${séprateur}`
//         }
//         else if (i == array_de_strings.length-1){
//             string = `${string}${array_de_strings[i]}`
//         } 
//     }
//     return string
// }

// console.log(ma_fonction(arg1,arg2));