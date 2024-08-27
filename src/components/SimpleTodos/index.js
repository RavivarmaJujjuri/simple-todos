import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    inputData: '',
    todoCount: 1,
  }

  deleteTodo = id => {
    const {todoList} = this.state
    const updatedTodoList = todoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoList: updatedTodoList})
  }

  onChangeInput = event => {
    this.setState({inputData: event.target.value})
  }

  onAddNewTask = () => {
    const {inputData, todoCount} = this.state
    const newTodos = Array.from({length: todoCount}, (_, i) => ({
      id: Date.now() + i,
      title: inputData,
      completed: false,
    }))
    this.setState(prev => ({
      todoList: [...prev.todoList, ...newTodos],
      inputData: '',
      todoCount: 1,
    }))
  }

  onSaveExistingTask = (id, taskTitle) => {
    const {todoList} = this.state
    const newUpdatedList = todoList.map(each =>
      each.id === id ? {...each, title: taskTitle} : each,
    )
    this.setState({todoList: newUpdatedList})
  }

  render() {
    const {todoList, inputData} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-div-container">
            <input
              type="text"
              className="input"
              placeholder="Add Task"
              value={inputData}
              onChange={this.onChangeInput}
            />
            <button
              type="button"
              onClick={this.onAddNewTask}
              className="add-task-btn"
            >
              Add
            </button>
          </div>
          <ul className="todos-container">
            {todoList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                onEditedTask={this.onSaveExistingTask}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
