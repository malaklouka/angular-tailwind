import { Component } from '@angular/core';
import {ExchangeRates} from './exchange-rates/exchange-rates.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' My todo List';
  nextId = 4;

  todos = [
    { label: 'sport',
    done: false ,
     id: 3
    },
    { label: 'food',
    done: true ,
     id: 4
    },
    { label: 'play',
    done: false ,
     id: 1
    },
    { label: 'slepp',
    done: false ,
     id: 2
    }
  ]

  deleteTodo(todo : any){
    this.todos = this.todos.filter( t => t.label !== todo.label)
  }
  add(newTodoLabel: string) {
    let newTodo = {
      id: this.nextId,
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo);
    this.nextId++;
  }

  toggle(todo : any ) {
    todo.done = !todo.done;
  }
}
{/**
   addTo(newTodoLabel: string ){
    var newTodo = {
      label : newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo)
  }



  list: any[]= [];

    addTask(item: string){
    this.list.push({id: this.list.length, name:item})
    console.warn(this.list);

  }
  removeTask(id:number){
    this.list= this.list.filter(item=> item.id!==id)
    console.warn(this.list);


  }**/}
