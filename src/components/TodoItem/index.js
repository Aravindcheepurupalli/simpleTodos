import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteTodo} = props
  const {title, id} = itemDetails
  const onDeleteBtn = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="delete-btn" type="button" onClick={onDeleteBtn}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
