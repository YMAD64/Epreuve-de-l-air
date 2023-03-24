const args = process.argv.slice(2)

let arg2 = (args[args.length-1]);
args.pop()
let arg1 = args

let tab = ['coucou', 'cest', 'moi']
let sep = ['-']

function concat(array_de_strings, séparateur){
    
    let string = ""
    
    for (let i = 0 ; i < array_de_strings.length ; i++){        
        if(i == array_de_strings.length-1){
            string = `${string}${array_de_strings[i]}`
        }
        else string = `${string}${array_de_strings[i]}${séparateur}`    
    }return string
}
console.log(concat(tab, sep));

