import React, {Component} from 'react';

export default class TasksTable extends Component{
    constructor(props){
        super(props)//since we are extending class Table so we have to use super in order to override Component class constructor
        this.state ={
             bigData : [
                {   
                id:1,
                description: "Russian Volka",
                responsible: "Cyka Blyat",
                priority: "High",
                status: "false" ,
                }
                ,
                {   
                id:2,
                description: "An Dai Nhan Coffe",
                responsible: "An",
                priority: "Low",
                status: "false" ,
                }
                ,
                {   
                id:3,
                description: "Nhan Dai An Tra Sua",
                responsible: "Nhan",
                priority: "High",
                status: "false" ,
                }
            ]

        }
    }
    
    renderTableHeader(){
        var myData = Object.assign({}, this.state.bigData[0]);
        delete myData.status;
        let header = Object.keys(myData)

        return header.map((key,index)=>{

            return (
                
                <th key={index}>
                    {
                        key.toUpperCase()
                    }
                </th>
            )
        })
    }

    renderTableData(){
        return this.state.bigData.map((data,index)=>{
            const {id,description,responsible,priority,status}=data
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{description}</td>    
                    <td>{responsible}</td>    
                    <td>{priority}</td>    
                    {/* <td>{status}</td>     */}
                </tr>
            )
        })
    }

    render(){
        return (
            <div>

                <h1 className="text-center">Todo List</h1>
                <table id="bigData" className="table table-hover table-striped">
                    <thead className="thead-dark">
                        <tr>{this.renderTableHeader()}</tr>
                    </thead>
                    <tbody>
                        
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}



