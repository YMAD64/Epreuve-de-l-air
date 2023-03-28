// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2).join(' ')

// 2 FONCTIONS



function delCharAdj(string,){
    let newString = ""
    for(let i = 0 ; i < string.length ; i++){
        newString = `${newString}${string[i]}`
        for(let y = 0 ; y < string.length ; y++){
            if(string[i] == string[i+1])
            i++
            else if((string[i] == string[i+1]) && (string[i] == string[i+y])){
            i++
            }    
        }
    } return newString
}


// 3 GESTION D'ERREUR

if(args.length < 1){
    console.log("error");
}

// 4 RESOLUTION

else console.log(delCharAdj(args));

