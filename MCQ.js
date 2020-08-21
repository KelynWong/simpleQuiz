class MCQ{
    constructor(question, choices, answer, category){
        this.question= question
        this.choices= choices
        this.answer= answer
        this.category= category

        this.userAnswer=[]
    }
    getFullQuestion(){
        var s = this.question;
        for(var i=0; i<this.choices.length; i++){
            s += "\n" + (i+1) + ") " + this.choices[i]
        }
        return s;
    }
    getQuestion(){
        var b= this.question + " \n" + this.choices
        return b;
    }
    checkAnswer(){
        return this.answer;
    }
    
}

module.exports= MCQ;