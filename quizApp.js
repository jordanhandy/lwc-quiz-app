import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={} // For storing answers
    isSubmitted = false; // Boolean for checking if quiz has been submitted
    // Array of questions
    myQuestions=[
        {
            id:"Question 1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question 2",
            question:"Which of the file types are invalid in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question 3",
            question:"Which of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }

    ];
    // Count of correct answers
    correctAnswers = 0; // result answers
    // Getter to return a Boolean if all items have been answered
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }
    // Ternary operator is seen on frontend with CSS styling
    get scoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }
    changeHandler(e){
        // On change, add changes to array.  This allows us to keep track of answers
        console.log("name",e.target.name);
        const {name, value} = e.target;
        this.selected={...this.selected, [name]:value};
    }
    submitHandler(e){
        e.preventDefault();
        // Create new array if answer selected by user is same as defined answer
        // Count the correct answers
        // this is displayed on frontend at quiz end
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        this.correctAnswers = correct.length;
        console.log(this.correctAnswers)
        this.isSubmitted = true;

    }
    resetHandler(e){
        this.selected={};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }
}