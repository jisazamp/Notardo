import React, {Components, Component} from 'react';

class TaskForms extends Component{
    constructor(){
        super();
        this.state={
            title: '',
            Priority: 'low',
            Description:'',
            Date:''
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTask(this.state);
        this.setState({
            title: '',
            Priority: 'low',
            Description:'',
            Date:''
        });
    }

    handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
      }

    render(){
        return(
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.handleInputChange}                      
                        placeholder="title"
                        />
                    </div>
                    <div className="form-group">
                        <select
                        name="Priority"
                        className="form-control"
                        value={this.state.Priority}
                        onChange={this.handleInputChange}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="Description"
                        className="form-control"
                        value={this.state.Description}
                        onChange={this.handleInputChange}                        
                        placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="Date"
                        className="form-control"
                        value={this.state.Date}
                        onChange={this.handleInputChange}         
                        placeholder="Date"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default TaskForms;