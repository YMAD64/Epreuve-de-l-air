// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)

let arg2 = args.pop()
let arg1 = args

// 2 FONCTIONS

function pass_sanitaire(array_de_strings, string){
    let nouvel_array_de_strings = []
    for (let i = 0 ; i < array_de_strings.length ; i++){
        if(((array_de_strings[i]).toLowerCase()).includes(string.toLowerCase())){
            array_de_strings[i] = "refoulé";
        }
    }
    for (let i = 0 ; i < array_de_strings.length ; i++){
        if(array_de_strings[i]!="refoulé"){
          nouvel_array_de_strings.push(array_de_strings[i])  
        }
    }return nouvel_array_de_strings
}

function argsFalse(tab){

    for (let i=0 ; i<tab.length ; i++){
        if(isNaN(tab[i])){
        return false
        }
    }
    return true
}

// 3 GESTION D'ERREUR

if((args.length < 2) || (argsFalse(args))){
    console.log("error");
}

// 4 RESOLUTION

else console.log(pass_sanitaire(arg1,arg2).join(', '))