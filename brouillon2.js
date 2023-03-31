
const args = process.argv.slice(2)


function definirArgs(array){
    let stop = 0
    arg1 = []
    arg2 = []

    for(let i = 0 ; i < array.length ; i++){
        arg1.push(array[i])
        if(array[i+1]=="fusion"){
        stop = i+1
        break    
        }
    }
    for(let i = stop+1 ; i < array.length ; i++){
        arg2.push(array[i])
    }
    return arg1,arg2

}
definirArgs(args)

function my_bubble_sort(array){
    for(let i=0 ; i<array.length ; i++){
        for(let j=0 ; j<array.length ; j++){
        
            if(array[j]>array[j+1]){
                valMax = array[j]
                array[j] = array[j+1]
                array[j+1] = valMax
            }
        }     
    } return array
} 

function sorted_fusion(array1, array2){
    let new_array = array1.concat(array2)
    
    my_bubble_sort(new_array)
    
    return new_array    
}
console.log(sorted_fusion(arg1,arg2).join(' '));