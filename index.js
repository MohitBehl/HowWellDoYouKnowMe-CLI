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

// var readLineSync = require("readline-sync"); .... was not able to use it because of type:module in the package.json
import readLineSync from "readline-sync";
import chalk from 'chalk';

// MAIN LOGIC
var userName = readLineSync.question("Whats your name  ? ");
var score = 0;
var countCorrect = 0 , countIncorrect = 0;
console.clear();
greetings(userName);

var res = shallWeStartTheQuiz();

if(res){
    console.clear();
    console.log(chalk.cyanBright(chalk.bold("GAME TIME !!!")));
    console.log("-------------------------------------------------");

    for(var i = 0 ; i < questions.length ; i++){
        console.log(chalk.yellowBright("Current Score : "+score));
        console.log();
        var userRes = readLineSync.question("Ques."+(i+1)+" "+questions[i].ques);
        if(userRes.toUpperCase() == questions[i].answer){
            score = score + 1;
            console.log(chalk.greenBright("answer is Correct"));
            countCorrect = countCorrect + 1;
        }else{
            score = score - 1;
            console.log(chalk.redBright("answer is wrong"));
            countIncorrect = countIncorrect + 1;
        }

        console.log("-------------------------------------------------");
        console.log("-------------------------------------------------");
    }
}
console.clear();
goodBye();

// HELPER FUNCTIONS
// greetings
function greetings(name){
    console.log("-------------------------------------------------");
    console.log(chalk.cyan(chalk.bold("Hello "+name)));
    console.log("Welcome to my quiz !");
    console.log("------------------------------------------------ ");
    console.log(chalk.red("NOTE : Correct Rsponses will get you scores."));
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
    console.log();
    console.log();
    console.log("Thanks for your responses !!!");
    console.log("Good Bye !!! , Have a great day ahead ...");
}

function printScore(){
    console.log("Correct : "+chalk.greenBright(countCorrect)+"\nIncorrect : "+chalk.redBright(countIncorrect));
    console.log("Total Questions : 5 \n"+chalk.blackBright(chalk.bold(chalk.underline("Score : "+score))));
}


