import React, {Component} from 'react';


export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:null
        };

    }

        getInitialProps(){
        const res = fetch('http://localhost:4000/api/users')
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result);
            this.setState({
              isLoaded: true,
              users: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          
        ).catch((e)=>{
            console.log(e);
        })
    }
  



    componentDidMount(){
        
        let users = this.getInitialProps()
        this.setState({
            users: users
        })
        //console.log(this.state.users)
    }

        // componentDidUpdate() {
        //     fetch('http://localhost:4000/user')
        //     .then(response => {
        //         this.setState({users: response.data});
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })   
    

    renderTableHeader(){
        if(!this.state.users){
            return null
        }
        var myData = Object.assign({}, this.state.users[0]);
        let header = Object.keys(myData)
        console.log(this.state);
        
        return header.map((key,index)=>{
            if (key !== "_id"){                
                return (
                <th key={index} >{key.toUpperCase()}</th>
                )
            }
        })
    }

    renderTableData(){
        if(!this.state.users) {
            return null;
        }
        return this.state.users.map((data,index)=>{
            const {id,name,email,yob,role}=data
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>    
                    <td>{email}</td>
                    <td>{yob}</td>
                    <td>{role}</td>
                </tr>
            )
        })
    }

    render(){
        return (
            <div>

                <h1 className="text-center">List Table</h1>
                <table id="userData" className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

