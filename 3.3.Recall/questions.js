let selectElementsStartingWithA = (array) => {
 
    array.sort();
    array.splice(2, 2);
    return array; 
}

let selectElementsStartingWithVowel = (array) => {
    
    let sElSw = array.filter(str => /^[aeiou]/i.test(str));
    return sElSw;
}

let removeNullElements = (array) => {
    
    let rem = array.filter(n => (n===null) ? false : true);
    return rem;
}

let removeNullAndFalseElements = (array) => {
    
    let rem = array.filter(n => (n===null) || ((n===false) && typeof(n) == "boolean") ? false : true);
    return rem;
}
let reverseWordsInArray = (array) => {
   
    let res = array.map((element) => {

        let split = element.split("");
        split.reverse();
        split = split.join("");
        return split;
    });
    return res;
}

    

let everyPossiblePair = (array) => {
    
    let a = [];
    for (let i = 0; i < array.length - 1; i++) {
        
        for (let j = i + 1; j < array.length; j++) {
           
            a.push([array[i], array[j]].sort());
        }
    
    }
    
    return a.sort();
   
}   

let allElementsExceptFirstThree = (array) => {
   
    return array.slice(3, array.length);
}

let addElementToBeginning = (array, element) => {
   
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
   
    return array.sort((a, b) => a.charCodeAt(a.length - 1 ) - b.charCodeAt(b.length - 1));

}

let getFirstHalf = (string) => {
    
    return string.slice(0, Math.ceil(string.length / 2));
}

let makeNegative = (number) => {
    
    return -Math.abs(number) ;
}

let numberOfPalindromes = (array) => {
    
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        
        let a = array[i].split("");
        a = a.reverse(); 
        a = a.join("");
        if (array[i] === a ) {

            count++
        }
        
    }
    return count;
}

let shortestWord = (array) => {
    
   
  
}

let longestWord = (array) => {
    return 'Write your method here';
}

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
