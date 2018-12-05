import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService1Service {

  

  friends = ['ola','uber','zap'];

  sayHelloService(){
    console.log("Service is in cal!!!!");
  }
  
  returnMessage(){
      return("Hurray!!!")
  }
  constructor() { }
}
