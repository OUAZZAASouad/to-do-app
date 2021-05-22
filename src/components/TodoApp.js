import React from 'react'
import './TodoApp.css'
class TodoApp extends React.Component {
    constructor(props){
        super(props)
        this.state={
            todos  :[],
        }
        this.task = React.createRef()
    }
    addList = (e) => {
        e.preventDefault()
        this.setState({
            todos: [...this.state.todos,{
                id: Math.random(),
                task: this.task.current.value,
                status : false
            }],
            
        })
    }
    removeList = (e) => {
        this.setState({
            todos: this.state.todos.filter(item => item.id != e.id)
        }
           
        )
    }

    updateList = (e) => {
        const filtered = this.state.todos.filter(item => item.id != e.id)
        // let ntask = prompt('Update task');
        // this.setState({
        //   todos : this.state.todos.map(item => (item.id == e.id) ? {id:e.id, task : ntask} : item)    
        // })
        this.setState({
            todos : this.state.todos.map(item => (item.id == e.id) ? {id:e.id, task : this.task.current.value, status : e.status} : item)
            // todos:  [...filtered, {id: e.id, task: this.task.current.value, status:false}]        
            
            })

    }
    done = (e) =>{
        console.log(e)
        this.setState({
            // todos : [...this.state.todos.filter(item => item.id != e.id), {id:e.id, task : e.task, status : !e.status}]
            todos : this.state.todos.map(item => (item.id == e.id) ? {id:e.id, task : e.task, status : !e.status} : item)

        })
    }
    render(){
            // console.log(this.state.todos)
        return(
            <div className='container'>
                <h1>My Todo List</h1>
                <div className = 'content'>
                    <div>
                        <input type='text' ref={this.task}></input>
                        <button className = 'button add' onClick={(e) => this.addList(e)}> + Add task</button>
                    </div>
                    {this.state.todos.map(e => (
                        <div key = {e.id}>
                            <div className = 'item'>
                                <input type = 'checkbox' onClick = {() => this.done(e)} />
                                <span className = {e.status ? 'is_selected' : ''}>{e.task}</span> 
                                <button className = 'button delete' onClick={()=>this.removeList(e) }>Delete</button>  
                                <button className = 'button update' onClick={(item)=>this.updateList(e) }>Update</button>
                                
                            </div>
                            <hr/>
                        </div>
                    ))}

                </div>
                
            </div>
        )
    }
}
export default TodoApp;