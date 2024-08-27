// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, onEditedTask} = props
  const {id, title} = todoDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  const [isEdit, setIsEdit] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [taskTitle, setTaskTitle] = useState(title)
  const [buttonName, setButtonName] = useState('Edit')

  const onClickEdit = () => {
    setIsEdit(true)
  }
  const onSaveEditTask = () => {
    setIsEdit(false)
    onEditedTask(id, taskTitle)
  }
  const onChangeTitle = event => {
    setTaskTitle(event.target.value)
  }
  const onClickCheckInput = event => {
    setIsChecked(event.target.checked)
  }

  const handleClick = () => {
    if (buttonName === 'Edit') {
      onClickEdit()
      setButtonName('Save')
    } else if (buttonName === 'Save') {
      onSaveEditTask()
      setButtonName('Edit')
    }
  }

  const isCheckedTrue = isChecked ? 'checked-title' : ''

  // const editSaveBtn = isEdit ? 'Save' : 'Edit'

  // const btnFunc = isEdit ? onClickEdit() : onSaveEditTask()

  return (
    <li className="todo">
      {isEdit ? (
        <div className="text-btn-div">
          <input
            type="text"
            value={taskTitle}
            onChange={onChangeTitle}
            className="edit-input"
          />
        </div>
      ) : (
        <div className="text-btn-div">
          <div className="input-label-div">
            <input
              type="checkbox"
              id={id}
              checked={isChecked}
              onChange={onClickCheckInput}
              className="check-box"
            />
            <p htmlFor={id} className={`title ${isCheckedTrue}`}>
              {title}
            </p>
          </div>
        </div>
      )}
      <button type="button" className="btn" onClick={handleClick}>
        {buttonName}
      </button>
      <button type="button" className="btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
