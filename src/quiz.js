class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)

    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }
   
    // 2. getQuestion()
    getQuestion(){
        return this.questions[this.currentQuestionIndex];

    }
    
    // 3. moveToNextQuestion()

    moveToNextQuestion(){
        this.currentQuestionIndex += 1;
    }

    // 4. shuffleQuestions()

    shuffleQuestions(){
    for (let i = this.questions.length - 1; i > 0; i--){
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [this.questions[i], this.questions[randomIndex]] = [this.questions[randomIndex], this.questions[i]];
    }
    this.currentQuestionIndex = 0;
}

    // 5. checkAnswer(answer)

    checkAnswer(answer){
        
        const currentQuestion = this.questions[this.currentQuestionIndex];
       
        if (answer === currentQuestion.answer) {
            this.correctAnswers += 1;
            return true;
        }
        return false;
    }

    // 6. hasEnded()

    hasEnded(){
    return this.currentQuestionIndex >= this.questions.length;
}


   filterQuestionsByDifficulty(difficulty){
        this.difficulty = difficulty;
           
   
    }


    averageDifficulty(){
        return 


    }

}