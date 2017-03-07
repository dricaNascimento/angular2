import { Component } from 'angular2/core';

@Component({
    selector: 'my-app',
    /*template:
    `<h1>{{title}}</h1>
     <input type="text" [(ngModel)]="name"><br>
     <h3>Olá {{name}}</h3>
    `,*/
    templateUrl: 'app/my-app-template.html'
})

export class AppComponent{
    title:string = "My first AngularJS2 app";
    name:string = "AngularJS2"
}