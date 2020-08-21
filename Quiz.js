var MCQ= require('./MCQ.js')

class Quiz{
    constructor(category){
        this.category=category;
        this.questionPool= []  
        this.questionPool.push(new MCQ("Qn1) How do you make gold soup?", ["Add gold paint", "In a silver server", "Boil some gold", "Add 24 carrots"], 4, 1))
        this.questionPool.push(new MCQ("Qn2) Which animal keeps the best time?", ["A horse", "A timecat", "A watchdog", "A whale"], 3, 1))
        this.questionPool.push(new MCQ("Qn3) What is a ghost's favourite dessert?", ["I scream", "Fruit", "Trifle", "Lemon pie"], 1, 1))
        this.questionPool.push(new MCQ("Qn4) What vegetable do you get when an elephant walks through your garden?", ["Ginger", "Aubergine", "Asparagus", "Squash"], 4, 1))
        this.questionPool.push(new MCQ("Qn5) What fast food do sea monsters eat?", ["A potato", "Fish and chips", "Bat wings", "Sharks"], 2, 1))

        this.questionPool.push(new MCQ("Qn1) Which is the odd one out?", ["Blueberry", "Orange", "Apple", "Ball"], 4, 2))
        this.questionPool.push(new MCQ("Qn2) Which is the odd one out?", ["Matthew", "Kelly", "Rita", "Fiona"], 1, 2))
        this.questionPool.push(new MCQ("Qn3) Which is the odd one out?", ["Classroom", "Kitchen", "Bedroom", "Living room"], 1, 2))
        this.questionPool.push(new MCQ("Qn4) Which is the odd one out?", ["Girl", "Boy", "Women", "Female"], 2, 2))
        this.questionPool.push(new MCQ("Qn5) Which is the odd one out?", ["Corn flakes", "Nachos", "Cocoa puffs", "Cheerios"], 2, 2))

        this.questionPool.push(new MCQ("Qn1) What does BTW stand for?", ["By the water", "Back that way", "By the way", "By the west"], 3, 3))
        this.questionPool.push(new MCQ("Qn2) What does AWA stand for?", ["As well as", "As wise as", "As wicked as", "As witty as"], 1, 3))
        this.questionPool.push(new MCQ("Qn3) What does IWBNI stand for?", ["It would be neat instructions", "It would be new information", "It would be nice if", "It would be nice intent"], 3, 3))
        this.questionPool.push(new MCQ("Qn4) What does GBH stand for?", ["Great big heart", "Great big hug", "Great big bear hug", "Good bad haircut"], 2, 3))
        this.questionPool.push(new MCQ("Qn5) How does one abbreviate the term rolling on thr floor laughing?", ["ROFLRL", "RollOTFL", "ROtheFL", "ROFL"], 4, 3))

        this.questionPool.push(new MCQ("Qn1) Which mob will NOT become hostile to a player unless it is in a dark area?", ["Skeleton", "Creeper", "Guardian", "Spider"], 4, 4))
        this.questionPool.push(new MCQ("Qn2) What can a player drink from to remove the effects of a potion?", ["Water bucket", "Milk bucket", "Water bottle", "Awkward potion"], 2, 4))
        this.questionPool.push(new MCQ("Qn3) Which of these reduces the speed of players that pass through it?", ["Rose bush", "Banner", "Sign", "Cobweb"], 4, 4))
        this.questionPool.push(new MCQ("Qn4) Which enchantment allows a sword to throw enemies backwards when they are hit?", ["Knockback", "Punch", "Catapult", "Power"], 1, 4))
        this.questionPool.push(new MCQ("Qn5) Which ore is the rarest in minecraft?", ["Redstone ore", "Emerald ore", "Gold ore", "Diamond ore"], 2, 4))
        
        this.myQuestions = [];
        for(var i =0;i<this.questionPool.length;i++){
            if(this.questionPool[i].category==this.category)
             this.myQuestions.push(this.questionPool[i]);
        }
    }
    getNumberOfQuestion(){
        return this.myQuestions.length
    }
    getQuestionAt(index){
        return this.myQuestions[index]
    }
}

module.exports= Quiz;