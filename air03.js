// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)


// 2 FONCTIONS


function single(array){
    let single = []
    for(let i = 0 ; i < array.length ; i++){
        for(let y = 0 ; y < array.length ; y++){
            if((array[y] == array[i]) && (i != y)){
                array[y] = "Pair"
                array[i] = "Pair"
            } 
        }
    }
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] != "Pair"){
            single.push(array[i])
        }
    }return single
}


// 3 GESTION D'ERREUR

if(args.length < 1){
    console.log("error");
}

// 4 RESOLUTION

else console.log(single(args).join(' '))

