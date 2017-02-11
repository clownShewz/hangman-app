import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-hangmanwords',
  templateUrl: 'hangmanwords.component.html',
  styleUrls: ['hangmanwords.component.css']
  //inputs:['guessedWord','guessedLetters']
})
export class HangmanwordsComponent implements OnInit {
  @Input() guessedWord: string;
  @Input() guessedLetters: string[];



    ngOnInit(){
    };

}
