import React, { Component } from 'react';
import '../App.css';
import Navigation from './Navigation';
import {Tasks} from '../tasks.json';
import TaskForm from './TaskForms';

class CreateTask extends Component{
  constructor(){
    super();
    this.state ={
      Tasks //Task:Tasks
    };
    this.handleAddTask=this.handleAddTask.bind(this);
  }

  removeTask(index){
    this.setState({
      Tasks: this.state.Tasks.filter((e,i)=>{
        return i !== index
      })
    });
  }

  handleAddTask(task){
    this.setState({
      Tasks:[...this.state.Tasks,task]
    })
  }

  render(){
    const Tasks=this.state.Tasks.map((task, i)=>{
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className='card-title text-center'>
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.Priority}
              </span>
            </div>
            <div className='card-body'>
              <p>{task.Description}</p>
              <p>{task.Date}</p>
            </div>
            <div className="card-footer">
              <button
              className="btn btn-danger"
              onClick={this.removeTask.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });
    return(
      <div className="CreateTask">
         <Navigation titulo='Notardo'> </Navigation>
         <span className="badge badge-pill badge-light ml-2">
              {this.state.Tasks.length}
          </span>
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-4 text-center">
                <TaskForm onAddTask={this.handleAddTask}></TaskForm>
              </div>
              <div className="col-md-8">
                <div className="row">
                  {Tasks}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default CreateTask;
