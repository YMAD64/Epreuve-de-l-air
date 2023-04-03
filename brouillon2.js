
const args = process.argv.slice(2)

console.log(args);

function ma_rotation(array){
    let new_array = []
    for(let i = 1 ; i < array.length ; i++){
        new_array.push(array[i])
    } new_array.push(array[0])
    return new_array
}
console.log(ma_rotation(args))
