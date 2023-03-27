const args = process.argv.slice(2)


function single(array){
    single = []
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


console.log(single(args).join(' '))
