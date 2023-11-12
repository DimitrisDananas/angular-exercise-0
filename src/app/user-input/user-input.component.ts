import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  inputWord: string = "";
  @Output() wordEntered = new EventEmitter<string>();

  checkWordLength(){
    this.wordEntered.emit(this.inputWord);
    this.inputWord = ''
  }
}
