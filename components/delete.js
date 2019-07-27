import React, {Component} from 'react';
import axios from 'axios';
import UserModel from '../server/user.model';
import { userInfo } from 'os';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id:0,
        };
    }

    onChangeUserId(e) {
        this.setState({
            id: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        
        
        const deleteUser = {
        
            id: this.state.id,
        }

        console.log(deleteUser);
        axios.delete('http://localhost:4000/api/users/' + deleteUser.id)
            .then(res => {
                console.log(res.data);
            });
            

    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Delete User</h3>
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
                        <input type="submit" value="DeleteUser" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}