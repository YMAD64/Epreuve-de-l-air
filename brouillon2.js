const args = process.argv.slice(2).join(' ')






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

console.log(delCharAdj(args));




