import React, {Component} from 'react';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeYob = this.onChangeYob.bind(this);
        this.onChangeRole = this.onChangeRole.b1ind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id:'',
            name:'',
            email: '',
            yob: '',
            role: ''
        }
    }

    onChangeUserId(e) {
        this.setState({
            id: e.target.value
        });
    }

    onChangeUserName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeUserEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeUserYob(e) {
        this.setState({
            yob: e.target.value
        });
    }
    onChangeUserRole(e) {
        this.setState({
            role: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`User Id: ${this.state.id}`);
        console.log(`User Name: ${this.state.name}`);
        console.log(`User Email: ${this.state.email}`);
        console.log(`User Yob: ${this.state.yob}`);
        console.log(`User Role: ${this.state.role}`);
        const newUser = {
            
        }

        fetch('http://localhost:4000/user', newUser)
            .then(res => console.log(res.data));

        this.setState({
            id:'',
            name:'',
            email: '',
            yob: '',
            role: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.id}
                                onChange={this.onChangeUserId}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="text"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.name==='Low'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.todo_priority==='Medium'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.todo_priority==='High'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}