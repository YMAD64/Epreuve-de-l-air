const fs = require('fs');
const args = process.argv
let nomFichier = args[2]

fs.readFile(nomFichier, 'utf8', function(err, data){
    if(err){
    console.log('error');
    }    
    else 
    console.log(data);
})


