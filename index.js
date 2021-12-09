
//project insights
//1. speech recognition variable lives on top of window, in chrome it is inside webkitSpeechRecognition
//2. the project must be run through a server






const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//creating recognition object
const recognition = new speechRecognition();

//should work while we say 
recognition.interimResults = true;

//create p
let p = document.createElement("p");

//grab div words
const words = document.querySelector(".words");

//append child of node interface adds node to the end of the list of children of the specified parent node
words.appendChild(p);

//when result comes back
recognition.addEventListener("result", function(e){

    //e.results is not an array, convert it yo array
    const transcript = Array.from(e.results)
    .map(function (result){
       return result[0];
    })
    .map(function (result){
        return result.transcript;
     }).join('');



     p.textContent = transcript;

     if(e.results[0].isFinal )
     {
         p = document.createElement('p');
         words.appendChild(p);
     }

    console.log(transcript);
});

//upon end call recognition.start()
recognition.addEventListener("end", recognition.start);


//start recognition
recognition.start();

