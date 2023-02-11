'use strict'

const poll = {
    answers: [
         'Javascript' , 0,
         'Python' ,1,
         'Rust' , 2,
         'C' ,3
    ],
    registerNewAnswer() {
       for( const [alt, ling] of this.answers){
           [alt, ling].push(...this.answers)
       }
       console.log(alt,ling);
       const answer = Number(window.prompt(`Whats is your favorite programming language ?${ling} ${alt}`));
       
       
       if(answer === 0) this.answers.Javascript = +1;
       if(answer === 1) this.answers.Python = +1;
       if(answer === 2) this.answers.Rust +1;
       if(answer === 3) this.answers.C = +1;
    //else {return window.prompt('This is not a valid number!')};
    window.prompt(this.answers.value);
    displayResults(this.answers) 
        if(typeof type === object) console.log(type);
    }
    
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

