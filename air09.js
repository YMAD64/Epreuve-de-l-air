// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)

// 2 FONCTIONS

function ma_rotation(array){
    let new_array = []
    for(let i = 1 ; i < array.length ; i++){
        new_array.push(array[i])
    } new_array.push(array[0])
    return new_array
}

// 3 GESTION D'ERREUR

if(args.length < 2){
    console.log("error");
}

// 4 RESOLUTION

else console.log(ma_rotation(args).join(', '));