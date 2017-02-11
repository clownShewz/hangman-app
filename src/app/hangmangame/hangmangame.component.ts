import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hangmangame',
  templateUrl: 'hangmangame.component.html',
  styleUrls: ['hangmangame.component.css'],
  outputs:['guessCount']
})
export class HangmangameComponent implements OnInit {
  onSubmit(form: any) {
    //console.log(form);
    this.initializeGame(form.wordToGuess);
  }
  wordSubmitted :string;
  guessedWord :string [];
  hiddenGuess :string [] = [];
  guessedLetters :string []=[];
  hiddenLetter :string = '_____  ';
  guessCount:number;
  guessedLetter:string;
  //gameWon:boolean;
  //gameLost:boolean;


  constructor() {
    this.wordSubmitted = "FALSE";
    this.guessCount = 0;
  }

  initializeGame(word:string){
     this.wordSubmitted = "TRUE";
     this.guessedWord = word.toUpperCase().split('');
     this.replaceLetters();
  }

  replaceLetters():void {

    for (let i = 0; i < this.guessedWord.length; i++) {
      this.hiddenGuess.push(this.hiddenLetter);
    }
  }

  evaluateGuess(): void {
    let letter = this.guessedLetter.toUpperCase();

    if(this.getIndexinWordArray(this.guessedWord,letter) == -1){ this.addToGuessList(letter);
    }else{
        for(let i=0; i < this.guessedWord.length; i++){
          if(letter == this.guessedWord[i]){
             this.hiddenGuess[i] = letter.toUpperCase();
          }
        }
        this.winLoseResponse();
    }
    this.guessedLetter='';
  }


   addToGuessList(letter:string){
     if(this.getIndexinWordArray(this.guessedLetters,letter)==-1) {
         this.guessedLetters.push(letter);
         this.guessCount = this.guessedLetters.length;
     }else{
       alert('Oops, you already guessed that one. Try Again.');
       //TODO ADD PRETTIER POP UP
     }
   }

   getIndexinWordArray(wordArray:string[],letter:string): number{
    return this.convertArrayToString(wordArray).indexOf(letter);
  }

  convertArrayToString(wordArray:string[]){
    return wordArray.toString().replace(',','');
  }

  checkWinLose():string{
    let winLose:string="default";

    if(this.convertArrayToString(this.guessedWord) === this.convertArrayToString(this.hiddenGuess)){
      winLose = "win";
    }
    else if(this.guessedLetters.length >= 5){
      //TODO REMOVE THIS. PASS THIS DOWN FROM HANGMAN COMPONENT
      winLose = "lost";
    }
    return winLose;
  }

  winLoseResponse(){
    if (this.checkWinLose()=="win"){
      alert("Congratulations!! You won!!!");
    }else if(this.checkWinLose()=="lose"){
      alert("Sorry, that's too many guesses. You lose.");
    } else{
      //keep playing
    }

    //TODO ADD BUTTON OR POP UP TO PLAY AGAIN OR RESET GAME
  }
  ngOnInit() {
  }

}
