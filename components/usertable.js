import React, {Component} from 'react'
import fetch from 'isomorphic-unfetch'

class UserTable extends React.Component{
    static async getInitialProps({ req }) {
        const res = await fetch('../data/userdata.js');
        const data = await res.json();
        //console.log(`Show data fetched. Count:$(data.length)`);
        console.log(props);
        return {
            users : data
        };
    }
    
    

    render(){
        return(
            <div>
                <h1 className="text-center">User List Table</h1>
                <table id="userData" className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        {/* {this.props.users[0].id} */}
                    </tr>
                </thead>
                <tbody>
                    
                    
                </tbody>
            </table>
        </div>
        )
    }
}


// renderTableHeader(){
    //     var myData = Object.assign({}, users[0]);
    //     let header = Object.keys(myData);

    //     return header.map((key,index)=>{

    //         return (
    //             <th key={index} >{key.toUpperCase()}</th>
    //         )
    //     })
    // };

    // renderTableData(){
    //     return users.map((data,index)=>{
    //         const {id,name,email,yob,role}=newData
    //         console.log(users)
    //         return (
    //             <tr key={id}>
    //                 <td>{id}</td>
    //                 <td>{name}</td>    
    //                 <td>{email}</td>
    //                 <td>{yob}</td>
    //                 <td>{role}</td>
    //             </tr>
    //         )
    //     })
    // }


    export default UserTable;