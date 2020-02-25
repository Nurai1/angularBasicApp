import { Input, Component, OnChanges } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-stack-view',
  templateUrl: './stack-view.component.html',
  styleUrls: ['./stack-view.component.sass']
})
export class StackViewComponent implements OnChanges {
   @Input() stackHistory: Array<object>;
   editableHistory: Array<object> = [];
   editModal: boolean = false;

  constructor() {}

  changeHistory(){
    for (let i=0; i<this.stackHistory.length; i++){
      this.stackHistory[i] = this.makeClone(this.editableHistory[i]);
    }
  }

  makeClone(obj) {
    let clone = {}; // Создаем новый пустой объект
    for (let prop in obj) { // Перебираем все свойства копируемого объекта
      if (obj.hasOwnProperty(prop)) { // Только собственные свойства
        if ("object"===typeof obj[prop]) // Если свойство так же объект
        clone[prop] = this.makeClone(obj[prop]); // Делаем клон свойства
        else
        clone[prop] = obj[prop]; // Или же просто копируем значение
      }
    }
    return clone;
  }

  ngOnChanges(): void {
    this.stackHistory.sort((item1: object, item2: object) =>{
      if (item1["installMethod"] < item2["installMethod"]) {
        return -1;
      }
      if (item1["installMethod"] > item2["installMethod"]) {
        return 1;
      }
      return 0;
    });

    for (let i=0; i<this.stackHistory.length; i++){
      this.editableHistory[i] = this.makeClone(this.stackHistory[i]);
    }
  }
}
