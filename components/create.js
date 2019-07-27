import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserYob = this.onChangeUserYob.bind(this);
        this.onChangeUserRole = this.onChangeUserRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id:0,
            name:'',
            email: '',
            yob: 0  ,
            role: ''
        };
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
        
        console.log(this.state);
        const newUser = {
        
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            yob: this.state.yob,
            role: this.state.role
        }

        axios.post('https://next-todo-app.phucanvn2012.now.sh/api/users/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            id:0,
            name:'',
            email: '',
            yob: 0,
            role: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.id}
                                onChange={this.onChangeUserId}
                                />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeUserName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input  className="form-control"
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeUserEmail}
                                    />
                    </div>
                    <div className="form-group">
                        <label>Yob:</label>
                        <input  className="form-control"
                                    type="text"
                                    name="yob"
                                    value={this.state.yob}
                                    onChange={this.onChangeUserYob}
                                    />
                    </div>
                    <div className="form-group">
                        <label>Role:</label>
                        <input  className="form-control"
                                    type="text"
                                    name="role"
                                    value={this.state.role}
                                    onChange={this.onChangeUserRole}
                                    />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}