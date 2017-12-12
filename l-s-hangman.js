var word;
var beginner=["mars","toss","rose","banana","pluto","jupiter","flame","banana","san francisco","ocean beach","pomegranate","ogre"];
var intermediate=["blackbear","alphabet","orchid","diamond","skateboard","berkeley","curiosity","westcoast","intermediate"];
var difficult=["phoenix","autocratic","aurora","ambidextrous","juxtaposition","antelope","tangible","pi","oligarchy","sedation","isolation"];
var guesses=11;
var guessedLetters=[];

function startGame(){
    guessedLetters = [];
    var level=document.getElementById("level").value;
    document.getElementById("Guess").style.display="block";
    if(level==="1"){
        word = beginner[Math.floor(Math.random() * beginner.length)];
    }
    if(level==="2"){
        word = intermediate[Math.floor(Math.random() * intermediate.length)];
    }
    if (level==="3"){
        word = difficult[Math.floor(Math.random() * difficult.length)];
    }
    printWord();
}

function printWord(){
    var result="";
    for(var i=0;i<word.length;i++){
        if(guessedLetters.indexOf(word[i])===-1){
            result+="_ ";
        }else {
            result+= word[i];
        }
    }
    document.getElementById("answers").innerHTML= result;
    return result;
}

function guessLetter(){
    var guess = document.getElementById("guessLetters").value;
    var results = "";
    if (guessedLetters.indexOf(guess)>-1) {
        results = "You already guessed that. Try another letter!";
    }else{
        guessedLetters.push(guess)
    }
    var printedWord=printWord();

    if (word.indexOf(guess)===-1 && guesses>0) {
        guesses -= 1;
    }
    document.getElementById("guessesLeft").innerHTML = guesses.toString();

    if(guesses===0) {
        results = "You lost :( Try again! Your word was: "+ word;
        document.getElementById("Guess").style.display="none";
    }
    if (printedWord.indexOf("_")===-1 && guesses>=0){
        results = "Congratulations you won!! :)))";
        document.getElementById("Guess").style.display="none";
    }
    document.getElementById("answers2").innerHTML = results;


}

function goAgain(){
    startGame();
    guesses=11;
    document.getElementById("guessesLeft").innerHTML=guesses;
    guessedLetters=[];

}
