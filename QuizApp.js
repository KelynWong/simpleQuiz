var Quiz= require('./Quiz.js')
var MCQ= require('./MCQ.js')

var input= require('readline-sync')
var userAnswers=new Array(5);
console.log()
console.log("---> Welcome to Kelyn's Quiz Application <---")
console.log("~This quiz contains four different fun quiz category you can choose from\n~All questions must be attempted before submitting\n~If you are unsure, you can always leave it first and proceed to the next question\n~But do remember to go back to attempt it!\n~Hope you enjoy the quiz ^.^")
console.log() 

var name= input.question("Before you start,\nWhat's your name?\n> ")
var category= "Hey " + name + ", choose which category you would like to attempt:\n(1) Jokes\n(2) Odd one out\n(3) Online slang\n(4) Minecraft\n> "
var b;
b= getInput(1,5, category);
var a= new Quiz(b)
showAllQuestions();

displaySummary()
 

function getInput(min,max,msg){
    var x;
    do{
        var x = input.questionInt(msg);
        if(x<min||x>max)
        console.log("Out of range!");
    }while(x<min||x>max);
    return x
}

function showAllQuestions(){
    var s , x , pos=0;
do{
    s="\n-------------------";
    s += "\n  Question " + (pos+1) + " of " + a.getNumberOfQuestion()
    s += "\n-------------------\n";
    s += a.getQuestionAt(pos).getFullQuestion()
    s += "\n--------------------\n";
    s +="(Press N for next question, P for previous question, X to submit)";
    s += "\n>> ";
    x=input.question(s);
    if(x== 1||x == 2||x == 3|| x==4){
        userAnswers[pos]=x;
        pos++;

        if(pos == 5)
            return;
    }
   else if(x.toUpperCase() == "N")
   {
       
        if(pos<a.getNumberOfQuestion()-1){
        pos++
        userAnswers.push(" ")
        }
    }
    else if(x.toUpperCase() == "P"){
    if(pos>0){
        pos--;
    }
    }

}while(pos<5);
}

function displaySummary(){
    do{
        console.log()
        console.log("----------------\n  Summary page\n----------------")
        for(var i = 0 ; i < a.getNumberOfQuestion() ; i++) {
            var q = a.getQuestionAt(i);
            console.log(a.getQuestionAt(i).getFullQuestion());
            console.log("Your Answer: " + userAnswers[i]);
            console.log();
        }
        for(var i=0; i<userAnswers.length; i++){
            if(userAnswers[i]== " "){
                console.log("Hey! Question " + (i+1) + " is not attempted!")
            }
        }
        var sumbitOrChange = input.question("Enter 0 to submit your quiz or [1 to 5] to change your answer.\n>> ")
        console.log()
    
        if(sumbitOrChange==0){
            calculateResult()
        }else{
            userAnswers[sumbitOrChange-1] = input.question(a.getQuestionAt(sumbitOrChange-1).getFullQuestion() + "\nChange answer to >> ")
            console.log(userAnswers)
        }
    }while(sumbitOrChange != 0)
}

function calculateResult(){  
    var score=0;
    for(var i=0; i<userAnswers.length; i++){
        if(a.myQuestions[i].answer==userAnswers[i]){
        score++
        }
    }
    if(score==5){
        console.log("-----------\n  Results\n-----------")
        console.log("Your score: 5/5")
        console.log("Congrats!! You are smart :D")
    }else if(score==4 |  score==3 ){
        console.log("-----------\n  Results\n-----------")
        console.log("Your score: " + score + "/5")
        console.log("Can be better.. but not bod no bod! ")
    }else{
        console.log("-----------\n  Results\n-----------")
        console.log("Your score: " + score + "/5")
        console.log("Are you dum or dum?.. ")
    }
}