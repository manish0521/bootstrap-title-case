window.onload = init;

function init() {
    document.querySelector('#input')
        .addEventListener('keyup', handleTyping);
    
    document.querySelector('#inputme')
        .addEventListener('keyup', handleTyping2);
}

// function capital_letter(sentence) {
    
//     words = sentence.toLowerCase().split(" ");

//     // for (var i = 0, x = words.length; i < x; i++) {
//     //     let currentWord = words[i];
//     //     let capitalizedWord = currentWord[0].toUpperCase() + currentWord.substr(1);
//     //     words[i] = capitalizedWord;
//     // }

//     let i = 0;
    
//         while (i < words.length) {

//             if ( i === 0 || userInput [i -1] === " ") {
        
//         let currentWord = words[i];
//         let capitalizedWord = currentWord[0].toUpperCase() + currentWord.substr(1);
//             words[i] = capitalizedWord;
//             i++;
//         }
//     return words.join(" ! ");


    // let i = 0;

    // while ( i < sentence.length) {
    //     sentence[i] = sentence[i][0].toUpperCase()+sentence[i].replace(/ -/g, ":").substring(1);
    //     i++;
    // }


function handleTyping(event) {
    let userInput = event.target.value;

    let answer = "";
    
    let i = 0;

    let space = " ";
    
    
    while (i < userInput.length) {
        

        let previousChar = userInput[i - 1]

            if (i === 0 || previousChar === space) {


                answer = answer + userInput[i].toUpperCase();
            
            } 
            else { 
                
                answer = answer + userInput[i].toLowerCase() ;
            }
                
            i++;
    }
//     return words.join(" ! ");

        console.log(answer);

    
    document.querySelector('#changeme').innerText = answer;
}


function handleTyping2(event) {
    let userInput = event.target.value;

    let answer = "";
    
    

            if ( userInput === "hello") {


                answer = answer + userInput.toUpperCase() + "!";
            
            } 
            else if (userInput === "smile") {


                answer = answer + userInput.toUpperCase() + ":)";
            }  
            
            
    

        console.log(answer);

    
    document.querySelector('#displayme').innerText = answer;
}