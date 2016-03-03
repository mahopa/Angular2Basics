import { Component }       from 'angular2/core';

interface Item {
  name:string;
}

@Component({
  selector:'basic',
  templateUrl:'app/basic/basic.component.html',
  //Styles will only apply to this component and child components
  styleUrls:['app/basic/basic.component.css']
})
export class BasicComponent{
  count:number = 0;
  color:string = 'blue';
  someProperty:string = "This is the default!";
  items:Item[] = [
    {name:"First"},
    {name:"Second"},
    {name:"Third"}
  ];
  incrementCount(){
    this.count++;
  }
}
