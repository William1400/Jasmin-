let CreationTableauLangages =  () => {
    
    let languages = ["Html", "CSS", "Java", "PHP"];
    return languages;
}

let CreationTableauNombres =  () => {

    let nombres = [0, 1, 2, 3, 4, 5];
    return nombres;
}

let RemplacementElement = (langages) => {

    langages.splice(2, 1, "Javascript");
    return langages;
}

function AjoutElementLangages(langages) {

     langages.push('Ruby', 'Python');
     return langages;
}

let AjoutElementNombres =  (nombres) => {
    
    nombres.unshift(-2, -1);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {

 
    langages.shift();
    return langages;
}   


let SuppressionDernierElement =  (langages) => {

    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {


   let reseaux_sociaux = reseaux_sociaux_chaine.split(',');
   return reseaux_sociaux;
}

function ConversionTableauChaine(langages) {

    let langages_chaines = langages.join(',');
    return langages_chaines;
}


let TriTableau =  (reseaux_sociaux) => {

    let reseaux = reseaux_sociaux;
    return reseaux.sort();
}

let InversionTableau =  (langages) =>{

    langages.reverse();
    return langages;
}