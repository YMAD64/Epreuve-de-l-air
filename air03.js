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

///////////////////////////////////////////
//06/11/23/////////////////////////////////


// const args = process.argv.slice(2)

// //console.log(args);

// function pair_impair(string){
    
//     let impair = []

//     for(let i=0 ; i<string.length ; i++){
//         for (let j=0 ; j<string.length ; j++){
//             if ((string[i]==string[j]) && (i != j)){
//                 string[j] = "pair"
//                 string[i] = "pair"
//             }

//         }
//     }
//         for(let i=0 ; i<string.length ; i++){
//             if (string[i] != "pair"){
//                 impair.push(string[i])
//             }
//         }

//     return impair
// }

// console.log(pair_impair(args).join());

