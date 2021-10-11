
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {

    let concatString = texte1 + texte2;
    return concatString;
}
let afficherCar5 = (texte) => {
     
    let text =  texte.substr(4, 1);
    return text;
}
let afficher9Car =  (texte) => {
  
    let text = texte.substr(0, 9);
    return text;
}
let majusculeString =  (texte) => {
 
  let text = texte.toUpperCase();
  return text;
}
let minusculeString =  (texte) => {

    let text = texte.toLowerCase();
    return text;
}
let SupprEspaceString =  (texte) => {

    let text = texte.trim();
    return text;
}
let IsString =  (texte) => {
 
    if (typeof texte) {

        return true;
    }
}

let AfficherExtensionString =  (texte) => {

    return texte.split('.').pop();
}
let NombreEspaceString =  (texte) => {

    return texte.match(/[ ]/g).length;
}
let InverseString =  (texte) => {

   return texte.split('').reverse().join('');

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    
    return Math.pow(x, y);
}
let valeurAbsolue =  (nombre) => {

    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    
    return array.map(Math.abs);

}
let sufaceCercle =  (rayon) => {

    
    return Math.round(Math.PI * rayon ** 2 );
}
let hypothenuse =  (ab, ac) => {

    return Math.hypot(ab, ac);
}
let calculIMC =  (poids, taille) => {

    let imc = (poids) / (taille * taille); 
    return Number(imc.toFixed(2));

}
