import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

    historyDateToString(history){
      for (let item of history){
        item['date'] = (new Date(item['date'])).toDateString();
      }
    }

    makeClone(obj) {
      if (obj instanceof Array){
        let clone = [];
        for (let i=0; i < obj.length; i++){
          if ("object"===typeof obj[i])
            clone[i] = this.makeClone(obj[i]);
          else
            clone[i] = obj[i];
        }
        return clone;
      }
      let clone = {};
      for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if ("object"===typeof obj[prop])
            clone[prop] = this.makeClone(obj[prop]);
          else
            clone[prop] = obj[prop];
        }
      }
      return clone;
    }

    makeCloneFromArray(arr): object[] {
      let cloneArr: object[] = [];
      for (let i=0; i<arr.length; i++){
        cloneArr[i] = this.makeClone(arr[i]);
      }
      return cloneArr;
    }

    historySort(history, key):void {
      if (history === undefined) return;
      history.sort((item1: object, item2: object) =>{
        if (item1[key] < item2[key]) {
          return -1;
        }
        if (item1[key] > item2[key]) {
          return 1;
        }
        return 0;
      })
    }

  constructor() { }
}
