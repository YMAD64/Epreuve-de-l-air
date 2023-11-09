const fs = require('fs');
const nomFichier = process.argv[2]



fs.writeFile(nomFichier, 'contenu', function(err, data){
    if(err){
    console.log("error");
    }
    else 
    console.log('fichier créé');
})

fs.readFile(nomFichier, 'utf8', function(err, data){
    if(err){
    console.log('error');
    }    
    else 
    console.log(data);
})
fs.rename('nomFichier2', nomFichier, function(err, data){
    if(err){
    console.log('error');
    }    
    else 
    console.log("Fichier renomé");
})



