import { MdRemoveCircleOutline } from "react-icons/md";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove }) => {
  const { categoryId, categoryName } = todo;
  return (
    <div className="TodoListItem">
      <div className="text">{categoryName}</div>
      <div className="remove" onClick={() => onRemove(categoryId)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
