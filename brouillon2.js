const args = process.argv.slice(2)

let arg2 = args.pop()
let arg1 = args


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



console.log(pass_sanitaire(arg1,arg2).join(', '))