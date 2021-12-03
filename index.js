// QUESTION LIST
var questions = [
    {
        ques : "what's my full name ? \n",
        answer : "MOHIT BEHL"
    },
    {
        ques : "What's my age ? \n",
        answer : 23
    },{
        ques : "Where do I live ? \n",
        answer : "NEW DELHI"
    },{
        ques : "Do I like Chess ? (YES/NO) \n",
        answer : "YES"
    },{
        ques : "Brand of the phone I am currently using ? \n",
        answer : "NOKIA"
    }
]

var readLineSync = require("readline-sync");

// MAIN LOGIC
var userName = readLineSync.question("Whats your name  ? ");
var score = 0;

console.clear();
greetings(userName);

var res = shallWeStartTheQuiz();

if(res){
    console.clear();
    console.log("GAME TIME !!!");
    console.log("-------------------------------------------------");

    for(var i = 0 ; i < questions.length ; i++){
        console.log("Current Score : "+score);
        console.log();
        var userRes = readLineSync.question("Ques."+(i+1)+" "+questions[i].ques);
        if(userRes.toUpperCase() == questions[i].answer){
            score = score + 1;
            console.log("answer is Correct");
        }else{
            score = score - 1;
            console.log("answer is wrong");
        }

        console.log("-------------------------------------------------");
        console.log("-------------------------------------------------");
    }
}
goodBye();

// HELPER FUNCTIONS
// greetings
function greetings(name){
    console.log("-------------------------------------------------");
    console.log("Hello "+name);
    console.log("Welcome to my quiz !");
    console.log("------------------------------------------------ ");
    console.log("NOTE : Correct Rsponses will get you scores.")
}

function shallWeStartTheQuiz(){
    var response = readLineSync.question("Are you ready for the quiz ?(yes)");

    if(response.toUpperCase() === "YES" || response.toUpperCase() === "Y"){
        return true;
    }else{
        return false;
    }
}

function goodBye(){
    printScore();
    console.log("Thanks for your responses !!!");
    console.log("Good Bye !!! , Have a great day ahead ...");
}

function printScore(){
    console.log("Your final Score : "+score);
}


