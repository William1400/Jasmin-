let selectElementsStartingWithA = (array) => {
 
    array.sort();
    array.splice(2, 2);
    return array; 
}

let selectElementsStartingWithVowel = (array) => {
    
    let a = array.filter(str => /^[aeiou]/i.test(str));
    return a;
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
    
   return array.reduce((a, b) => {

     return a.length > b.length ? b : a ;
   });
  
}

let longestWord = (array) => {
    
    return array.sort(function(a, b ) {
         
        return b.length - a.length
    })[0];
}

let sumNumbers = (array) => {
   
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        
        count += array[i];
        
    }
    return count;
}

let repeatElements = (array) => {
  
    return array.concat(array).sort((a, b) => a -b);
}

let stringToNumber = (string) => {
    
    let num = Math.floor(string);
    return num;
}

let calculateAverage = (array) => {
    
    return array.reduce((a, b) => a + b, 0) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {

    let nA = [];
    let i = 1;
    let x = array[0];
   
    while (x <= 5 && i < array.length) {
        nA.push(x);
        x = array[i];
        i++;
    }

   return nA;
}    
        
let convertArrayToObject = (array) => {
    
    // let arr = [];
    // while (array.length < 0) {
        
    //    arr.push(array.slice(0, 2))
    // }
    
    // return Object.fromEntries(arr);
}

let getAllLetters = (array) => {
    
    
    let arr = [...new Set(array)].join("").split('').sort();

    return arr.sort()

}

let swapKeysAndValues = (object) => {
    
     return Object.keys(object).reduce((obj, key) => Object.assign({}, obj, { [object[key]]: key }), {});
}

let sumKeysAndValues = (object) => {
    
    let obj = Object.keys(object);
    let val = Object.values(object)
    let sum = 0;
    for (let i = 0; i <val.length; i++) {
       
        sum += parseInt(val[i], 10) + parseInt(obj[i], 10);
    
    }

    return sum;
}

let removeCapitals = (string) => {

    return string.match(/[^A-Z]/g, '').join("").toString();
  
}

let roundUp = (number) => {
   
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    
    let datum = new Date(date);
    let d = datum.getDate();
    let m = datum.getMonth() + 1;
    let y = datum.getFullYear();
    return "0" + d + '/0' +  m  + '/' + y;
}

let getDomainName = (string) => {
    
/*     let email = string;
    let name   = email.substring(0, email.lastIndexOf("@"));
    let domain = email.substring(email.lastIndexOf("@") +1) 

    return name, domain; 
 */
}



let titleize = (string) => {

  /* string = string.toLowerCase().split(' ');
	for (var i = 0; i < string.length; i++) {
		string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
	}
	return string.join(' ');*/
}  


let checkForSpecialCharacters = (string) => {
 
    return string.match(/[^a-zA-Z0-9]+$/) ? true : false;
}

let squareRoot = (number) => {
    
    return Math.sqrt(number);
}

let factorial = (number) => {
   
    let factNum = 1; 
    for (i = 1; i <= number; i++) {

        factNum *= i;
    }
    return factNum;
}

let findAnagrams = (string) => {
    
 /*    let anagrams = {};
    let strings = string.slpit();
    strings.forEach((str) => {
        
    }); (let i in strings) {

        str = strings[i];
        let sort = sort.sort(str);
        if (anagrams[sort] != null) {
           (')
            anagrams[sort].push(string);
        } 
        else {
            anagrams[sort] = [string];
        }
        
    }
    return anagrams;*/
} 

let convertToCelsius = (number) => {

    return Math.round((number - 32) * 5 / 9);
}    

let letterPosition = (array) => {
 
    for (let index = 0; index < array.length; index++) {
       
        let positions = [];
        let texte = array.toString();
	    for ( var i = 0; i < texte.length; i++ ) {
		    
            let charCode = texte.charCodeAt(i);
		    if ( charCode >= 97 && charCode <= 122 ) {
			
                positions.push( charCode - 96 );

		    } else if ( charCode >= 65 && charCode <= 90 ) { 
			
                positions.push( charCode - 64 );
		    }
	    }
        return positions;
    }    
}
