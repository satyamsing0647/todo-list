import React, {Component} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddList from "./AddList";

export default class TodoList extends Component{

    state = {
        todos: [
          { Id: '1', Title: 'Push your code to github', Status: 'Done' },
          { Id: '2', Title: 'Email to your manager', Status: 'Pending' },
          { Id: '3', Title: 'Hibernate Assignment' , Status: 'Done'}
        ]
     };

     deleteToDo = (todo) => {
        const filteredItems = this.state.todos.filter(x => x.Id !== todo.Id);
        this.setState({
             todos: filteredItems
        });
     };

     editToDo = (x) => {
        this.setState(state => ({
             todos: state.todos.map(todo => {
               if (todo.Id === x.Id) {
                   return {
                         ...todo,
                         Status: todo.Status === "Done" ? "Pending" : "Done"
                   };
              } else {
                  return todo;
              }
          })
      }));
   };

   addToDo = (todo) => {
    this.setState({
        todos: [...this.state.todos, todo]
    });
};
     

     render(){
        return(
            <div>
                <AddList onAdd={this.addToDo}></AddList>
                <h1>To-do List</h1>
                <table class="table">
                   <thead>
                     <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Action</th>
                     </tr>
                   </thead>

                   
{/*
	Now let’s loop through this array and display these records using simple <table> tag. 
  Note that with React we are using JSX syntax so here we can display 
  this array using this.state.todos.map(). 
  This map() will iterate each item of the loop and display it one by one.
*/}
                   <tbody>
                       {this.state.todos.map(x => {
                         return (
                              <tr key={x.Id}>
                              <td>{x.Id}</td>
                              <td>{x.Title}</td>
                              <td style={{ color: x.Status === "Done" ? "green" : "red" }}>
                                {x.Status}</td>
                              <td>
                                 <button className="btn btn-danger" 
                                 onClick={() => this.deleteToDo(x)}>
                                    <span>
                                        <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                    </span>
                                 </button>
                                 &nbsp;
                                 <button className="btn btn-success"
                                 onClick={() => this.editToDo(x)}>
                                    <span>
                                        <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                    </span>
                                 </button>
                              </td>
                              </tr>
                          );
                       })}
                    </tbody>
                </table>
            </div>
        );
     }
}