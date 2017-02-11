import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import * as D3 from 'd3';

@Component({
  selector: 'app-hangman',
  templateUrl: 'hangman.component.html',
  styleUrls: ['hangman.component.css']
})
export class HangmanComponent implements OnInit {
 @Input() guessCount:number;
 hangmanText:string;
 container;

  constructor() {
      this.container =  D3.select('#gallows').append("svg").attr("width",'100%').attr("length",'100%');
      this.drawGallows();
  }
  ngOnChanges(changes: SimpleChanges){
      if(changes['guessCount']){
        this.drawHangman(this.guessCount);
      }
  }
  drawHangman(guesses:number){
    switch(guesses){
      case 1:
        //this.hangmanText = "Head";
        this.drawHead();
        break;
      case 2:
        //this.hangmanText = this.hangmanText + "- body";
        this.drawBody();
        break;
      case 3:
         //this.hangmanText = this.hangmanText +"- left arm";
         this.drawArm("left");
       break;
      case 4:
         //this.hangmanText = this.hangmanText +"- right arm";
        this.drawArm("right");
         break;
      case 5:
         //this.hangmanText = this.hangmanText +"-left leg";
         this.drawLeg("left");
         break;
      case 6:
          //this.hangmanText = this.hangmanText +"- right leg";
          this.drawLeg("right");
          break;
    }

  }

  drawGallows(){
     //mainLine = container.append("mainLine").attr("x1",5).attr("y1",5).attr("x2",50).attr("y2",50).attr("stroke-width",2).attr("stroke","black");

    this.container.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "white");
    const mainLine = this.container.append("rect").attr("x",50).attr("y",50).attr("width",10).attr("height",200);
    const topSupport = this.container.append("rect").attr("x",50).attr("y",50).attr("width",75).attr("height",10);
    const bottomSupport = this.container.append("rect").attr("x",40).attr("y",140).attr("width",75).attr("height",10);
  }

  drawHead(){
    //mainLine = container.append("mainLine").attr("x1",5).attr("y1",5).attr("x2",50).attr("y2",50).attr("stroke-width",2).attr("stroke","black");
    this.container.append("circle").attr("cx",125).attr("cy",70).attr("r",10)
  }

  drawBody(){
    this.container.append("rect").attr("x",122.5).attr("y",70).attr("width",5).attr("height",45);
  }

  drawArm(side:string){
    if(side == "right") {
      this.container.append("line").attr("x1", 145).attr("y1", 100).attr("x2", 122.5).attr("y2", 85).attr("stroke-width",2).attr("stroke","black");
    }

    if(side == "left") {
      this.container.append("line").attr("x1", 122.5).attr("y1", 85).attr("x2", 100).attr("y2", 100).attr("stroke-width",2).attr("stroke","black");
    }
  }

  drawLeg(side:string){
    if(side == "right") {
      this.container.append("line").attr("x1", 122.5).attr("y1", 110).attr("x2", 145).attr("y2", 130).attr("stroke-width",2).attr("stroke","black");
    }

    if(side == "left") {
      this.container.append("line").attr("x1", 124.5).attr("y1", 110).attr("x2", 100).attr("y2", 130).attr("stroke-width",2).attr("stroke","black");
    }
  }



  ngOnInit() {
  }

}
