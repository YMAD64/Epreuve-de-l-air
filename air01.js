// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)
let arg1 = args[0]
let arg2 = args[1]

// 2 FONCTIONS

function letArrayArg(argument, array){ //  ---> fonction qui met les arguments sous forme de tableaux à raison de 1 mot = 1 élément

    let element = ""
    let séparateur = " "

    for(let i = 0 ; i <= argument.length ; i++){
        if((argument[i] != séparateur) && (i != argument.length)){
        element = `${element}${argument[i]}`  
        } 
        else if((argument[i]==séparateur) || (i == argument.length)){
        array.push(element)
        element = ""
        }
    }return array
}

function split_en_fonction(string_à_couper, string_séparateur){
    
    let array_string_à_couper = []
    let array_string_séparateur = []
    
    letArrayArg(string_à_couper, array_string_à_couper)
    letArrayArg(string_séparateur, array_string_séparateur) 

    let tableau = array_string_à_couper[0]    
    
    for (let i = 1 ; i < array_string_à_couper.length ; i++){
        if(array_string_à_couper[i] != array_string_séparateur[0]){
        tableau = `${tableau} ${array_string_à_couper[i]}`
        }
        else if (array_string_à_couper[i] == array_string_séparateur[0]){
        array_string_à_couper.splice(i, 1)
        tableau = `${tableau}\n${array_string_à_couper[i]}`    
        }
    } return tableau
}
 
// 3 GESTION D'ERREUR

if(args.length < 1){
    console.log("error");
}

// 4 RESOLUTION

else console.log(split_en_fonction(arg1, arg2))
