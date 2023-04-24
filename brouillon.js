// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)
let arg1 = args[0]
let arg2 = args[1]


// 2 FONCTIONS

function pyr(char, number){
    for (let i = 0 ; i < number ; i++){
        let space = ' '
        console.log(`${space.repeat(number-(i+1))}${char.repeat(i*2+1)}`);
    }
}

function argsError(arg1, arg2){
    if((arg1) == undefined || (arg2) == undefined){
        return true
    }
    else if ((arg1.length) < 1 || (arg2.length) < 1){
       return true
    }
    else if(isNaN(arg2)){
        return true
    }
    else if(arg2 <= 0){
        return true
    }
    else return false
}
// 3 GESTION D'ERREUR

if (argsError(arg1,arg2)){
    console.log('error');
}

// 4 RESOLUTION

else pyr(arg1,arg2)



